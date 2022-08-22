import React, { useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../global/styles/globalStyles";
import { addStyle } from "./addStyle";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";

import { typeTransactions } from "../../consts/spendingCategories";
import { windowHeight } from "../../utils/dimensions";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../input/input";
import { Formik } from "formik";
import SelectDropdown from "react-native-select-dropdown";

import { useSelector, useDispatch } from "react-redux";
import {
  calculateAllIncomes,
  calculateAllSpendings,
  calculateBudgetSpendingsAndIncomes,
} from "../../global/functions/store";
import { add as addTypeTransaction } from "../../redux/features/user/userSpendingsAndIncomesTypeTransaction";
import { addTransaction as addCategory } from "../../redux/features/user/userSpendingsAndIncomesCategories";
import { convertNumberTypeTransactionToName } from "../../global/functions/converter";
import { FormSchema } from "../../consts/schemas";
// import { addPlanned } from "../../redux/features/spendings/plannedPayments";
import { returnNewDate } from "../../global/functions/time";
import { categories } from "../../consts/categories";

const Add = ({ handleModal }) => {
  const [typeCategorySelected, setTypeCategorySelected] = useState(1);
  const [typeCategoryIncomeSelected, setTypeCategoryIncomeSelected] =
    useState(1);
  const [choosenPart, setChoosenPart] = useState(1);

  const [type, setType] = useState("Wants");

  const [typeIncome, setTypeIncome] = useState("Wants");

  const [amountError, setAmountError] = useState(true);
  const [amountIncomeError, setAmountIncomeError] = useState(true);
  const [titleError, setTitleError] = useState(true);
  const [titleIncomeError, setTitleIncomeError] = useState(true);
  const [periodError, setPeriodError] = useState(true);

  let list = useSelector((state) => state.userSpendingsAndIncomesCategories);

  const { currentBudget } = calculateBudgetSpendingsAndIncomes(list);

  const [category, setCategory] = useState(categories[0].name);
  const [categoryIncome, setCategoryIncome] = useState(categories[0].name);
  const renderIncomesAndSpendingsTitles = () => {
    return (
      <View style={addStyle.containerButtons}>
        <TouchableOpacity
          onPress={() => {
            setChoosenPart(1);
          }}
          style={[
            addStyle.containerButton,
            {
              backgroundColor: choosenPart == 1 ? COLORS.PRIMARY : COLORS.WHITE,
            },
          ]}
        >
          <Ionicons
            name="arrow-down-circle"
            color={COLORS.RED}
            size={SIZES.BASE * 7}
          />
          <Text
            style={[
              addStyle.textButton,
              { color: choosenPart == 1 ? COLORS.WHITE : COLORS.PRIMARY },
            ]}
          >
            Spending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setChoosenPart(2);
          }}
          style={[
            addStyle.containerButton,
            {
              backgroundColor: choosenPart == 2 ? COLORS.PRIMARY : COLORS.WHITE,
            },
          ]}
        >
          <Ionicons
            name="arrow-up-circle"
            color={COLORS.GREEN}
            size={SIZES.BASE * 7}
          />
          <Text
            style={[
              addStyle.textButton,
              { color: choosenPart == 2 ? COLORS.WHITE : COLORS.PRIMARY },
            ]}
          >
            Income
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderCurrentBudget = () => {
    return (
      <View style={addStyle.containerBudget}>
        <Text style={addStyle.title}>CURRENT BUDGET</Text>
        <View style={addStyle.containerBudgetText}>
          <Ionicons
            name="cash-outline"
            style={addStyle.iconCashCurrentBudget}
          />
          <Text style={addStyle.currentBudgetNumber}>{currentBudget} DH</Text>
        </View>
      </View>
    );
  };

  const renderSetTitleInput = (props) => {
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Title</Text>
        <Text style={addStyle.subTitle}>Set Your Title For Your Spending</Text>
        <Input
          nameIcon="cash-outline"
          placeholder="Set Title"
          isPassword={false}
          onChangeText={props.handleChange("title")}
          value={props.values.title}
          onBlur={props.handleBlur("title")}
          error={props.errors.title}
          touched={props.touched.title}
          isNumeric={false}
          setter={setTitleError}
        />
      </View>
    );
  };
  const renderSetTitleIncomeInput = (props) => {
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Title</Text>
        <Text style={addStyle.subTitle}>Set Your Title For Your Spending</Text>
        <Input
          nameIcon="cash-outline"
          placeholder="Set Title"
          isPassword={false}
          onChangeText={props.handleChange("titleIncome")}
          value={props.values.titleIncome}
          onBlur={props.handleBlur("titleIncome")}
          error={props.errors.titleIncome}
          touched={props.touched.titleIncome}
          isNumeric={false}
          setter={setTitleIncomeError}
        />
      </View>
    );
  };
  const renderSetAmountIncomeInput = (props) => {
    let subtitle =
      choosenPart == 1
        ? "How much is your spending"
        : "How much Do you wanna add to your wallet";
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Amount</Text>
        <Text style={addStyle.subTitle}>{subtitle}</Text>
        <Input
          nameIcon="cash-outline"
          placeholder="Set Amount"
          isPassword={false}
          onChangeText={props.handleChange("amountIncome")}
          value={props.values.amountIncome}
          onBlur={props.handleBlur("amountIncome")}
          error={props.errors.amountIncome}
          touched={props.touched.amountIncome}
          isNumeric={true}
          setter={setAmountIncomeError}
        />
      </View>
    );
  };
  const renderSetAmountInput = (props) => {
    let subtitle =
      choosenPart == 1
        ? "How much is your spending"
        : "How much Do you wanna add to your wallet";
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Amount</Text>
        <Text style={addStyle.subTitle}>{subtitle}</Text>
        <Input
          nameIcon="cash-outline"
          placeholder="Set Amount"
          isPassword={false}
          onChangeText={props.handleChange("amount")}
          value={props.values.amount}
          onBlur={props.handleBlur("amount")}
          error={props.errors.amount}
          touched={props.touched.amount}
          isNumeric={true}
          setter={setAmountError}
        />
      </View>
    );
  };

  const renderSetCategoryInput = () => {
    const items = categories.map((item) => {
      return item.name;
    });
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Category</Text>
        <Text style={addStyle.subTitle}>Choose Your Category</Text>
        <View style={[globalStyles.inputContainer, addStyle.input]}>
          <Ionicons
            name="grid"
            size={SIZES.FONT * 1.5}
            color={COLORS.PRIMARY}
            style={globalStyles.inputIcon}
          />
          <SelectDropdown
            buttonTextStyle={{
              color: COLORS.PRIMARY,
              fontWeight: "bold",
            }}
            data={items}
            onSelect={(selectedItem, index) => {
              choosenPart == 1
                ? setCategory(selectedItem)
                : setCategoryIncome(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return choosenPart == 1 ? category : categoryIncome;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            rowTextStyle={{
              color: "white",
            }}
            renderSearchInputRightIcon={true}
            rowStyle={{
              backgroundColor: COLORS.PRIMARY,
            }}
            defaultValue={items[0]}
            buttonStyle={{
              backgroundColor: "transparent",
            }}
          />
        </View>
      </View>
    );
  };

  const renderSetPeriodInputFormTextInput = (props) => {
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Period</Text>
        <Text style={addStyle.subTitle}>Choose Your period of payment</Text>
        <Input
          nameIcon="alarm"
          placeholder="Type 0 if it is a non planned Spending"
          isPassword={false}
          onChangeText={props.handleChange("period")}
          value={props.values.period}
          onBlur={props.handleBlur("period")}
          error={props.errors.period}
          touched={props.touched.period}
          isNumeric={true}
          setter={setPeriodError}
        />
      </View>
    );
  };

  const renderClassifySpending = () => {
    let title = choosenPart == 1 ? "SPENDING" : "INCOME";
    let finalCategorySelected =
      choosenPart == 2 ? typeCategoryIncomeSelected : typeCategorySelected;
    const renderItem = ({ item }) => {
      const changingTypeIncome = () => {
        setTypeCategoryIncomeSelected(item.id);
        setTypeIncome(item.name);
      };

      const changingTypeSpending = () => {
        setTypeCategorySelected(item.id);
        setType(item.name);
      };
      let color =
        finalCategorySelected == item.id ? COLORS.SECONDARY : COLORS.GREY;
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            choosenPart == 2 ? changingTypeIncome() : changingTypeSpending();
          }}
          style={[
            addStyle.inputCategorie,
            {
              backgroundColor: color,
            },
          ]}
        >
          <Ionicons
            name="cash-outline"
            size={SIZES.FONT * 1.5}
            color={item.color}
            style={addStyle.iconCategory}
          />
          <Text style={[addStyle.textCategory, { color: item.color }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Classify Your {title}</Text>
        <View style={addStyle.containerCategories}>
          <FlatList
            data={typeTransactions}
            keyExtractor={(item) => `${item.id}`}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
      </View>
    );
  };

  const Period = (props) => {
    return renderSetPeriodInputFormTextInput(props);
  };

  const formikRef = useRef(null);

  const renderButtonDoneForm = (props) => {
    let amount = props.values.amount;
    let title = props.values.title;
    let period = props.values.period;
    let doneSpending =
      category != null && !periodError && !titleError && !amountError;

    const dispatch = useDispatch();
    return (
      <View
        onStartShouldSetResponder={() => {
          if (doneSpending) {
            let newDate = returnNewDate(new Date(), period);
            if (period != 0) {
              // dispatch();
              // addPlanned({
              //   title: title,
              //   price: Number(amount),
              //   category: category,
              //   date: newDate,
              //   duration: period,
              // })
            }

            dispatch(
              addCategory({
                transaction: convertNumberTypeTransactionToName(choosenPart),
                date: new Date(),
                title: title,
                price: Number(amount),
                category: category,
                period: period,
                type: type,
              })
            );

            dispatch(
              addTypeTransaction({
                transaction: convertNumberTypeTransactionToName(choosenPart),
                date: new Date(),
                title: title,
                price: Number(amount),
                category: category,
                period: period,
                type: type,
              })
            );
            handleModal();
          }
        }}
        style={[
          addStyle.button,
          addStyle.done,
          { opacity: doneSpending ? 1 : 0.6 },
        ]}
      >
        <Text style={addStyle.textLoginButton}>Done</Text>
      </View>
    );
  };

  const renderButtonDoneFormIncome = (props) => {
    let amount = props.values.amountIncome;
    let title = props.values.titleIncome;
    let doneIncome =
      categoryIncome != null &&
      !amountIncomeError != "" &&
      !titleIncomeError != "";

    const dispatch = useDispatch();
    return (
      <View
        onStartShouldSetResponder={() => {
          if (doneIncome) {
            dispatch(
              addCategory({
                transaction: convertNumberTypeTransactionToName(choosenPart),
                date: new Date(),
                title: title,
                price: Number(amount),
                category: category,
                type: type,
              })
            );

            dispatch(
              addTypeTransaction({
                transaction: convertNumberTypeTransactionToName(choosenPart),
                date: new Date(),
                title: title,
                price: Number(amount),
                category: category,
                type: type,
              })
            );
            handleModal();
          }
        }}
        style={[
          addStyle.button,
          addStyle.done,
          { opacity: doneIncome ? 1 : 0.6 },
        ]}
      >
        <Text style={addStyle.textLoginButton}>Done</Text>
      </View>
    );
  };

  const renderCloseButton = () => {
    return (
      <View
        style={addStyle.containerCloseButton}
        onStartShouldSetResponder={handleModal}
      >
        <Ionicons style={addStyle.iconClose} name="close-circle-outline" />
      </View>
    );
  };

  return (
    <ScrollView style={globalStyles.AndroidSafeAreaWithNoWhiteBackground}>
      <View style={addStyle.container}>
        {renderCloseButton()}
        {renderIncomesAndSpendingsTitles()}
        {renderCurrentBudget()}
        {choosenPart == 1 ? (
          <Formik
            innerRef={formikRef}
            initialValues={{
              title: "",
              amount: "",
              period: "",
              titleIncome: "",
              amountIncome: "",
            }}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
            }}
          >
            {(props) => {
              return (
                <>
                  {renderSetAmountInput(props)}
                  {renderSetTitleInput(props)}
                  {renderSetCategoryInput(props)}
                  {renderSetPeriodInputFormTextInput(props)}
                  {renderClassifySpending()}
                  <View
                    style={{
                      backgroundColor: COLORS.LIGHTGREY,
                      height: windowHeight * 0.01,
                      borderColor: "transparent",
                    }}
                  ></View>

                  {renderButtonDoneForm(props)}
                </>
              );
            }}
          </Formik>
        ) : (
          <Formik
            innerRef={formikRef}
            initialValues={{
              title: "",
              amount: "",
              period: "",
              titleIncome: "",
              amountIncome: "",
            }}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
            }}
          >
            {(props) => {
              return (
                <>
                  {renderSetAmountIncomeInput(props)}
                  {renderSetTitleIncomeInput(props)}
                  {renderSetCategoryInput(props)}
                  {renderClassifySpending()}
                  <View
                    style={{
                      backgroundColor: COLORS.LIGHTGREY,
                      height: windowHeight * 0.01,
                      borderColor: "transparent",
                    }}
                  ></View>

                  {renderButtonDoneFormIncome(props)}
                </>
              );
            }}
          </Formik>
        )}
      </View>
    </ScrollView>
  );
};

export default Add;
