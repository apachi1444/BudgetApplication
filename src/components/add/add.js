import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { globalStyles } from "../../global/styles/globalStyles";
import { addStyle } from "./addStyle";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/color";
import { SIZES } from "../../consts/theme";
import { listCategories } from "../../consts/categories";
import { windowHeight, windowWidth } from "../../utils/dimensions";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../input/input";
const Add = () => {
  const [categorySelected, setCategorySelected] = useState(1);
  const [choosenPart, setChoosenPart] = useState(1);
  const [amount, setAmount] = useState(0);
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

  const renderSetAmountInput = () => {
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Amount</Text>
        <Text style={addStyle.subTitle}>
          How much Do you wanna add to your wallet
        </Text>
        <Input
          nameIcon="cash-outline"
          value={amount}
          placeholder="Set Amount"
          isPassword={false}
          onChangeText={(value) => setAmount(value)}
        />
      </View>
    );
  };

  const renderSetCategoryInput = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: "Food", value: "apple" },
      { label: "Street", value: "banana" },
    ]);

    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Category</Text>
        <Text style={addStyle.subTitle}>Choose Your Category Now !</Text>
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

  const renderSetPeriodInput = () => {
    return (
      <View style={addStyle.containerInput}>
        <Text style={addStyle.title}>Set Amount</Text>
        <Text style={addStyle.subTitle}>
          How much Do you wanna add to your wallet
        </Text>
        <View style={[globalStyles.inputContainer, addStyle.input]}>
          <Ionicons
            name="cash-outline"
            size={SIZES.FONT * 1.5}
            color={COLORS.PRIMARY}
            style={globalStyles.inputIcon}
          />
          <TextInput
            placeholder="Set Amount"
            placeholderTextColor={COLORS.GREY}
          />
        </View>
      </View>
    );
  };

  const renderClassifySpending = () => {
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
        <Text style={addStyle.title}>Classify Your Spending</Text>
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

  return (
    <ScrollView style={globalStyles.AndroidSafeAreaWithNoWhiteBackground}>
      <View style={addStyle.container}>
        {renderIncomesAndSpendingsTitles()}
        {renderCurrentBudget()}
        {renderSetAmountInput()}
        {renderSetCategoryInput()}
        {renderSetPeriodInput()}
        {renderClassifySpending()}
      </View>
    </ScrollView>
  );
};

export default Add;
