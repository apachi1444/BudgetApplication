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
import * as yup from "yup";
import { categoriesLabels } from "../../consts/categoriesLabels";
import { periodSpendingLabels } from "../../consts/periodSpendingLabels";
import { useSelector, useDispatch } from "react-redux";
import { total } from "../../global/functions/store";
import { checkNumsExpression } from "../../global/functions/regex";
import { add } from "../../redux/features/spendings/spendings";
import { addPlanned } from "../../redux/features/spendings/plannedPayments";
import { addGuideSpending } from "../../redux/features/spendings/guideSpendings";

const Add = ({ handleModal }) => {
  const [categorySelected, setCategorySelected] = useState(1);
  const [choosenPart, setChoosenPart] = useState(1);
  let listSpendings = useSelector((state) => state.userSpending);
  let listIncomes = useSelector((state) => state.userIncome);

  const [type, setType] = useState("Wants");

  const totalSpendings = total(listSpendings);
  const totalIncomes = total(listIncomes);

  const currentBudget = totalIncomes - totalSpendings;

  const [valueCategory, setValueCategory] = useState(null);
  const [valuePeriod, setValuePeriod] = useState(null);

  const FormSchema = yup.object({
    title: yup.string().required().min(4),
    amount: yup
      .string()
      .required()
      .test("is-num", "Amount Must Be Number ", (val) => {
        return checkNumsExpression.test(val);
      }),
  });
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
        />
      </View>
    );
  };

  const renderSetCategoryInput = () => {
    const [open, setOpen] = useState(false);

    const [items, setItems] = useState(categoriesLabels);

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
              borderColor: valueCategory !== null ? COLORS.GREEN : COLORS.RED,
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
            value={valueCategory}
            items={items}
            setOpen={setOpen}
            setValue={setValueCategory}
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
    const renderItem = ({ item }) => {
      let color = categorySelected == item.id ? COLORS.SECONDARY : COLORS.GREY;
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            setCategorySelected(item.id);
            console.log("this is the item name ", item.name);
            setType(item.name);
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

  const renderButtonDoneForm = (props) => {
    let amount = props.values.amount;
    let title = props.values.title;

    let doneSpending =
      valueCategory != null &&
      valuePeriod != null &&
      amount != "" &&
      title != "";

    let doneIncome = valueCategory != null && amount != "" && title != "";

    let listSpendings = useSelector((state) => state.userPlannedSpend);
    let listIncomes = useSelector((state) => state.userIncome);
    const dispatch = useDispatch();
    return (
      <View
        onStartShouldSetResponder={() => {
          if (doneSpending || doneIncome) {
            handleModal();
            // dispatch(
            //   add({
            //     title: title,
            //     price: Number(amount),
            //     category: valueCategory,
            //     period: valuePeriod,
            //     type: type,
            //   })
            // );
            console.log(addGuideSpending);
            dispatch(
              addGuideSpending({
                title: title,
                price: Number(amount),
                category: valueCategory,
                period: valuePeriod,
                type: type,
              })
            );
            console.log("klsdjqf");
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

  return (
    <ScrollView style={globalStyles.AndroidSafeAreaWithNoWhiteBackground}>
      <View style={addStyle.container}>
        <Formik
          innerRef={formikRef}
          initialValues={{ title: "", amount: "", period: "" }}
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
                {renderSetAmountInput(props)}
                {renderSetTitleInput(props)}
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
      </View>
    </ScrollView>
  );
};

export default Add;
