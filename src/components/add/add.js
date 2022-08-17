import React, { useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { globalStyles } from "../../global/styles/globalStyles";
import { addStyle } from "./addStyle";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import { listCategories } from "../../consts/spendingCategories";
import { windowHeight } from "../../utils/dimensions";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../input/input";
import { Formik } from "formik";
import { categoriesLabels } from "../../consts/categoriesLabels";
import {
  periodSpendingLabels,
  renderNumberDaysDependingOnPeriodName,
} from "../../consts/periodSpendingLabels";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateAllIncomes,
  calculateAllSpendings,
} from "../../global/functions/store";
import { add } from "../../redux/features/spendings/spendings";
import { convertNumberTypeTransactionToName } from "../../global/functions/converter";
import { FormSchema } from "../../consts/schemas";
import { addPlanned } from "../../redux/features/spendings/plannedPayments";
const Add = ({ handleModal }) => {
  const [categorySelected, setCategorySelected] = useState(1);
  const [categoryIncomeSelected, setCategoryIncomeSelected] = useState(1);
  const [choosenPart, setChoosenPart] = useState(1);

  const [type, setType] = useState("Wants");

  const [typeIncome, setTypeIncome] = useState("Wants");

  let list = useSelector((state) => state.spendingsAndIncomes);

  const totalSpendings = calculateAllSpendings(list);
  const totalIncomes = calculateAllIncomes(list);

  const currentBudget = totalIncomes - totalSpendings;

  const [valueIncomeCategory, setValueIncomeCategory] = useState(null);

  const [valueCategory, setValueCategory] = useState(null);
  const [valuePeriod, setValuePeriod] = useState(null);

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
        />
      </View>
    );
  };

  const renderSetCategoryInput = () => {
    const [open, setOpen] = useState(false);

    const [items, setItems] = useState(categoriesLabels);

    let valueUsed = choosenPart == 1 ? valueCategory : valueIncomeCategory;

    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Category</Text>
        <Text style={addStyle.subTitle}>Choose Your Category</Text>
        <View
          style={[
            globalStyles.inputContainer,
            addStyle.input,
            {
              zIndex: 5000,
              borderColor: valueUsed !== null ? COLORS.GREEN : COLORS.RED,
              borderWidth: 3,
            },
          ]}
        >
          <Ionicons
            name="cash-outline"
            size={SIZES.FONT * 1.5}
            color={COLORS.PRIMARY}
            style={globalStyles.inputIcon}
          />
          <DropDownPicker
            open={open}
            value={choosenPart == 1 ? valueCategory : valueIncomeCategory}
            items={items}
            setOpen={setOpen}
            setValue={
              choosenPart == 1 ? setValueCategory : setValueIncomeCategory
            }
            setItems={setItems}
            style={{
              borderRadius: 0,
              borderColor: "transparent",
              flex: 30000,
              zIndex: 50000,
            }}
            showArrowIcon={true}
            autoScroll={false}
            stickyHeader={true}
            labelStyle={{
              fontWeight: "bold",
              fontSize: SIZES.BASE * 3,
              textAlign: "center",
            }}
            containerStyle={{
              flex: 1,
              fontSize: SIZES.BASE * 3,
              height: windowHeight * 0.05,
              justifyContent: "center",
            }}
            dropDownContainerStyle={{
              fontSize: SIZES.BASE * 3,
              backgroundColor: "red",
              zIndex: 800000,
              flex: 1,
              elevation: 1000,
            }}
          />
        </View>
      </View>
    );
  };

  const renderSetPeriodInput = () => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(periodSpendingLabels);
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Period</Text>
        <Text style={addStyle.subTitle}>Choose Your Period Now !</Text>

        <View
          style={[
            globalStyles.inputContainer,
            addStyle.input,
            {
              zIndex: open ? 1 : 0,
              borderColor: valuePeriod !== null ? COLORS.GREEN : COLORS.RED,
              borderWidth: 3,
            },
          ]}
        >
          <>
            <Ionicons
              name="cash-outline"
              size={SIZES.FONT * 1.5}
              color={COLORS.PRIMARY}
              style={globalStyles.inputIcon}
            />
            <DropDownPicker
              open={open}
              value={valuePeriod}
              items={items}
              setOpen={setOpen}
              setValue={setValuePeriod}
              setItems={setItems}
              style={{
                borderRadius: 0,
                borderColor: "transparent",
              }}
              zIndex={5000}
              showArrowIcon={true}
              autoScroll={true}
              stickyHeader={true}
              labelStyle={{
                fontWeight: "bold",
                fontSize: SIZES.BASE * 3,
                textAlign: "center",
              }}
              containerStyle={{
                flex: 1,
                height: windowHeight * 0.05,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </>
        </View>
      </View>
    );
  };

  const renderClassifySpending = () => {
    let title = choosenPart == 1 ? "SPENDING" : "INCOME";
    let finalCategorySelected =
      choosenPart == 2 ? categoryIncomeSelected : categorySelected;
    const renderItem = ({ item }) => {
      const changingTypeIncome = () => {
        setCategoryIncomeSelected(item.id);
        setTypeIncome(item.name);
      };

      const changingTypeSpending = () => {
        setCategorySelected(item.id);
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
            data={listCategories}
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
    return renderSetPeriodInput(props);
  };

  const formikRef = useRef(null);
  const formikRefSecondary = useRef(null);

  const renderButtonDoneForm = (props) => {
    let amount =
      choosenPart == 1 ? props.values.amount : props.values.amountIncome;

    let title =
      choosenPart == 1 ? props.values.title : props.values.titleIncome;

    let doneSpending =
      valueCategory != null &&
      valuePeriod != null &&
      amount != "" &&
      title != "";

    let doneIncome = valueIncomeCategory != null && amount != "" && title != "";

    let listSpendings = useSelector((state) => state.userPlannedSpend);
    let listIncomes = useSelector((state) => state.userIncome);
    const dispatch = useDispatch();
    return (
      <View
        onStartShouldSetResponder={() => {
          if (doneSpending || doneIncome) {
            let milliseconds =
              new Date().getTime() +
              renderNumberDaysDependingOnPeriodName(valuePeriod) *
                (24 * 60 * 60 * 1000);
            let newDate = new Date(milliseconds);

            dispatch(
              addPlanned({
                title: title,
                price: Number(amount),
                date: newDate,
                period: renderNumberDaysDependingOnPeriodName(valuePeriod),
              })
            );
            dispatch(
              add({
                transaction: convertNumberTypeTransactionToName(choosenPart),
                date: new Date(),
                title: title,
                price: Number(amount),
                category: valueCategory,
                period: valuePeriod,
                type: type,
              })
            );
            handleModal();
          }
        }}
        style={[
          addStyle.button,
          addStyle.done,
          { opacity: (choosenPart == 1 ? doneSpending : doneIncome) ? 1 : 0.6 },
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
        {choosenPart == 1 ? (
          <Formik
            innerRef={formikRef}
            initialValues={{ title: "", amount: "" }}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
            }}
          >
            {(props) => {
              return (
                <>
                  {renderCloseButton()}
                  {renderIncomesAndSpendingsTitles()}
                  {renderCurrentBudget()}
                  {renderSetAmountInput(props)}
                  {renderSetTitleInput(props)}
                  {renderSetCategoryInput(props)}
                  <Period props={props} />

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
            innerRef={formikRefSecondary}
            initialValues={{ titleIncome: "", amountIncome: "" }}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
            }}
          >
            {(props) => {
              return (
                <>
                  {renderIncomesAndSpendingsTitles()}
                  {renderCurrentBudget()}
                  {renderSetAmountIncomeInput(props)}
                  {renderSetTitleIncomeInput(props)}
                  {renderSetCategoryInput(props)}
                  {choosenPart == 1 ? <Period props={props} /> : null}

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
        )}
      </View>
    </ScrollView>
  );
};

export default Add;
