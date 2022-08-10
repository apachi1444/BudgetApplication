import React, { useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { globalStyles } from "../../global/styles/globalStyles";
import { addStyle } from "./addStyle";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import { listCategories } from "../../consts/categories";
import { windowHeight } from "../../utils/dimensions";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../input/input";
import { Formik } from "formik";
import * as yup from "yup";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const Add = ({ handleModal }) => {
  const [categorySelected, setCategorySelected] = useState(1);
  const [choosenPart, setChoosenPart] = useState(1);
  const [amount, setAmount] = useState(0);
  const [period, setPeriod] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const FormSchema = yup.object({
    title: yup.string().required().min(4),
    category: yup.string().required(),
    period: yup.string().required(),
    amount: yup
      .string()
      .required()
      .test("is-num", "Amount Must Be Number ", (val) => {
        return parseInt(val) > 0;
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
          <Text style={addStyle.currentBudgetNumber}>210 DH</Text>
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
          placeholder="Set Title"
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

  const renderSetCategoryInput = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: "Food", value: "Food" },
      { label: "Street", value: "Street" },
      { label: "Beauty", value: "Beauty" },
    ]);

    console.log(value);

    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Category</Text>
        <Text style={addStyle.subTitle}>Choose Your Category</Text>

        <View
          style={[
            globalStyles.inputContainer,
            addStyle.input,
            { zIndex: 5000, borderColor: COLORS.FACEBOOK, borderWidth: 3 },
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
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
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
              height: windowHeight * 0.05,
              justifyContent: "center",
            }}
          />
        </View>
      </View>
    );
  };

  const renderSetPeriodInput = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: "1 year", value: "1 year" },
      { label: "6 months", value: "6 months" },
      { label: "3 months", value: "3 months" },
      { label: "1 month", value: "1 months" },
    ]);

    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Period</Text>
        <Text style={addStyle.subTitle}>Choose Your Period Now !</Text>

        <View
          style={[
            globalStyles.inputContainer,
            addStyle.input,
            { zIndex: 5000 },
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
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              borderRadius: 0,
              borderColor: "transparent",
            }}
            zIndex={5000}
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
              height: windowHeight * 0.05,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
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

  const Period = () => {
    return renderSetPeriodInput();
  };

  return (
    <ScrollView style={globalStyles.AndroidSafeAreaWithNoWhiteBackground}>
      <View style={addStyle.container}>
        <Formik
          initialValues={{ title: "", amount: "" }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            console.log(values, "dk", actions);
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
                <View
                  onStartShouldSetResponder={() => {
                    handleModal();
                  }}
                  style={[addStyle.button, addStyle.done]}
                >
                  <View>
                    <Text style={addStyle.textLoginButton}>Done</Text>
                  </View>
                </View>
              </>
            );
          }}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Add;
