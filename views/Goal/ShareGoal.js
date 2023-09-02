import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Portal, PaperProvider } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import reduxAction from "../../redux/action";
import { Modal, ScrollView, StyleSheet } from "react-native";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import { Button } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const ShareGoal = ({ navigation }) => {
  const [peoplechange, setPeoplechange] = useState("people");
  const [role, setRole] = useState();
  const [permissions, setPermissions] = useState();
  const [reviewFrequency, setReviewFrequency] = useState();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const familyData = useSelector((state) => state.settingFamilyData);
  const reviewerData = useSelector((state) => state.settingReviewerData);
  const shareFamilyData = useSelector((state) => state.shareFamilyData);
  const shareReviewerData = useSelector((state) => state.shareReviewerData);
  const [updateChange, setUpdateChange] = useState("");
  const [editId, setEditId] = useState(0);

  const [editfamilyData, setEditFamilyData] = useState(0);
  const [editreviewerData, setEditReviewerData] = useState(0);

  const parameterdata = useSelector((state) => state.parameterdata);
  const ShareGoalData = useSelector((state) => state.ShareGoalData);

  const [reviewerFName, setReviewerFName] = useState("");
  const [reviewerLName, setReviewerLName] = useState("");
  const [reviewerEmail, setReviewerEmail] = useState("");
  const [reviewerPhNo, setReviewerPhno] = useState("");
  const [reviewerReason, setReviewerReason] = useState("");

  const [peopleFName, setPeopleFName] = useState("");
  const [peopleLName, setPeopleLName] = useState("");
  const [peopleEmail, setPeopleEmail] = useState("");
  const [peoplePhNo, setPeoplePhNo] = useState("");
  const [peopleReason, setPeopleReason] = useState("");

  const [editclick, setEditclick] = useState(false);
  const [editclick2, setEditclick2] = useState(false);

  const {
    peoplefirstname,
    peoplelastname,
    peopleemail,
    peoplephno,
    reasontoshare1,
    peoplerole,
    peoplepermissions,
  } = shareFamilyData;

  const {
    reviewerfirstname,
    reviewerlastname,
    revieweremail,
    reviewerphno,
    reasontoshare2,
  } = shareReviewerData;

  const handlePeopleFirstName = (e) => {
    setPeopleFName(e);
    dispatch({
      type: reduxAction.UPDATE_PEOPLE_DATA,
      payload: { ...shareFamilyData, peoplefirstname: e },
    });
  };

  const handlePeopleLastName = (e) => {
    setPeopleLName(e);
    dispatch({
      type: reduxAction.UPDATE_PEOPLE_DATA,
      payload: { ...shareFamilyData, peoplelastname: e },
    });
  };

  const handlePeopleEmail = (e) => {
    setPeopleEmail(e);
    dispatch({
      type: reduxAction.UPDATE_PEOPLE_DATA,
      payload: { ...shareFamilyData, peopleemail: e },
    });
  };

  const handlePeoplePhNo = (e) => {
    setPeoplePhNo(e);
    dispatch({
      type: reduxAction.UPDATE_PEOPLE_DATA,
      payload: { ...shareFamilyData, peoplephno: e },
    });
  };

  const handleReasonToShare1 = (e) => {
    setPeopleReason(e);
    dispatch({
      type: reduxAction.UPDATE_PEOPLE_DATA,
      payload: { ...shareFamilyData, reasontoshare1: e },
    });
  };

  const handlepeoplerole = (itemValue) => {
    setRole(itemValue.value);
    dispatch({
      type: reduxAction.UPDATE_PEOPLE_DATA,
      payload: { ...shareFamilyData, peoplerole: itemValue.value },
    });
  };

  const handlepermission = (itemValue) => {
    setPermissions(itemValue.value);
    dispatch({
      type: reduxAction.UPDATE_PEOPLE_DATA,
      payload: { ...shareFamilyData, peoplepermissions: itemValue.value },
    });
  };

  const handleReviewerFirstName = (e) => {
    setReviewerFName(e);
    dispatch({
      type: reduxAction.UPDATE_REVIEWER_DATA,
      payload: { ...shareReviewerData, reviewerfirstname: e },
    });
  };

  const handleReviewerLastName = (e) => {
    setReviewerLName(e);
    dispatch({
      type: reduxAction.UPDATE_REVIEWER_DATA,
      payload: { ...shareReviewerData, reviewerlastname: e },
    });
  };

  const handleReviewerEmail = (e) => {
    setReviewerEmail(e);
    dispatch({
      type: reduxAction.UPDATE_REVIEWER_DATA,
      payload: { ...shareReviewerData, revieweremail: e },
    });
  };

  const handleReviewerPhNo = (e) => {
    setReviewerPhno(e);
    dispatch({
      type: reduxAction.UPDATE_REVIEWER_DATA,
      payload: { ...shareReviewerData, reviewerphno: e },
    });
  };

  const handleReasonToShare2 = (e) => {
    setReviewerReason(e);
    dispatch({
      type: reduxAction.UPDATE_REVIEWER_DATA,
      payload: { ...shareReviewerData, reasontoshare2: e },
    });
  };

  const addfamilydata = () => {
    setModalVisible1(false);

    const shareFamilyData = {
      editable: false,
      notification: 1,
      view: 0,
      firstName: peoplefirstname,
      lastName: peoplelastname,
      email: peopleemail,
      phoneNo: peoplephno,
      shareReason: reasontoshare1,
      role: peoplerole,
      frequency: peoplepermissions,
    };

    dispatch({
      type: reduxAction.ADD_GROUP_FAMILY_DATA,
      payload: [...familyData, shareFamilyData],
    });

    setPeopleFName("");
    setPeopleLName("");
    setPeopleEmail("");
    setPeoplePhNo("");
    setPeopleReason("");
    setRole("");
    setPermissions("");
    setEditFamilyData(0);
  };

  const addreviewerdata = () => {
    setModalVisible2(false);

    const shareReviewerData = {
      editable: false,
      email: revieweremail,
      firstName: reviewerfirstname,
      lastName: reviewerlastname,
      phoneNo: reviewerphno,
      role: "Reviewer",
      shareReason: reasontoshare2,
    };

    dispatch({
      type: reduxAction.ADD_GROUP_REVIEWER_DATA,
      payload: [...reviewerData, shareReviewerData],
    });
    setReviewerFName("");
    setReviewerLName("");
    setReviewerEmail("");
    setReviewerPhno("");
    setReviewerReason("");
    setEditReviewerData(0);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: 8,
      padding: 15,
      width: "92%",
      maxHeight: "80%",
    },
    text: {
      fontSize: 16,
    },
  });

  const handleOnReviewFrequency = (itemValue, id) => {
    const editFrequency = parameterdata.find((i) => i.id === id);
    const updatedData = parameterdata.map((t) =>
      t.id === editFrequency.id
        ? (t = {
            id: t.id,
            frequency: itemValue.value,
            proofOfProgress: "",
            parameter: t.parameter,
          })
        : {
            id: t.id,
            frequency: t.frequency,
            proofOfProgress: "",
            parameter: t.parameter,
          }
    );

    dispatch({
      type: reduxAction.UPDATE_PARAMETER_DATA,
      payload: updatedData,
    });
  };

  // console.log(parameterdata);

  const editFamily = (targetIndex) => {
    setModalVisible1(true);
    const peopleEditor = familyData.find((_, index) => index === targetIndex);
    setPeopleFName(peopleEditor.peoplefirstname);
    setPeopleLName(peopleEditor.peoplelastname);
    setPeopleEmail(peopleEditor.peopleemail);
    setPeoplePhNo(peopleEditor.peoplephno);
    setPeopleReason(peopleEditor.reasontoshare1);
    setRole(peopleEditor.peoplerole);
    setPermissions(peopleEditor.peoplepermissions);
    setEditFamilyData(targetIndex);
    setEditclick(true);
  };

  const updateFamilyData = () => {
    const updatedObject = {
      peoplefirstname: peopleFName,
      peoplelastname: peopleLName,
      peopleemail: peopleEmail,
      peoplephno: peoplePhNo,
      reasontoshare1: peopleReason,
      peoplerole: role,
      peoplepermissions: permissions,
    };

    const updatedArray = [...familyData];
    updatedArray[editfamilyData] = updatedObject;

    dispatch({
      type: reduxAction.ADD_GROUP_FAMILY_DATA,
      payload: updatedArray,
    });
    setPeopleFName("");
    setPeopleLName("");
    setPeopleEmail("");
    setPeoplePhNo("");
    setPeopleReason("");
    setRole("");
    setPermissions("");
    setEditclick(false);
    setModalVisible1(false);
  };

  const handleOnCloseTab = () => {
    setModalVisible1(false);
    setPeopleFName("");
    setPeopleLName("");
    setPeopleEmail("");
    setPeoplePhNo("");
    setPeopleReason("");
    setRole("");
    setPermissions("");
    setEditclick(false);
  };

  const handleCloseTab2 = () => {
    setModalVisible2(false);
    setReviewerFName("");
    setReviewerLName("");
    setReviewerEmail("");
    setReviewerPhno("");
    setReviewerReason("");
    setEditclick(false);
  };

  const editReview = (targetIndex) => {
    setModalVisible2(true);
    const reviewEditor = reviewerData.find((_, index) => index === targetIndex);
    setReviewerFName(reviewEditor.reviewerfirstname);
    setReviewerLName(reviewEditor.reviewerlastname);
    setReviewerEmail(reviewEditor.revieweremail);
    setReviewerPhno(reviewEditor.reviewerphno);
    setReviewerReason(reviewEditor.reasontoshare2);
    setEditReviewerData(targetIndex);
    setEditclick2(true);
  };

  const updateReviwerData = () => {
    const updatedReviewerObject = {
      reviewerfirstname: reviewerFName,
      reviewerlastname: reviewerLName,
      revieweremail: reviewerEmail,
      reviewerphno: reviewerPhNo,
      reasontoshare2: reviewerReason,
    };

    const updatedReviewerArray = [...reviewerData];
    updatedReviewerArray[editreviewerData] = updatedReviewerObject;

    dispatch({
      type: reduxAction.ADD_GROUP_REVIEWER_DATA,
      payload: updatedReviewerArray,
    });
    setModalVisible2(false);
  };

  const deleteFamily = (targetIndex) => {
    const deleteFamilyData = familyData.filter(
      (_, index) => index !== targetIndex
    );
    dispatch({
      type: reduxAction.ADD_GROUP_FAMILY_DATA,
      payload: deleteFamilyData,
    });
  };

  const deleteReviewer = (targetIndex) => {
    const deleteReviewerData = reviewerData.filter(
      (_, index) => index !== targetIndex
    );
    dispatch({
      type: reduxAction.ADD_GROUP_REVIEWER_DATA,
      payload: deleteReviewerData,
    });
  };

  const editMode = (id) => {
    setModalVisible3(true);
    const editer = parameterdata.find((i) => i.id === id);
    setUpdateChange(editer.parameter);
    setEditId(id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setModalVisible3(false);
    if (editId) {
      const editer = parameterdata.find((i) => i.id === editId);
      const updatedData = parameterdata.map((t) =>
        t.id === editer.id
          ? (t = {
              id: t.id,
              frequency: t.frequency,
              proofOfProgress: "",
              parameter: updateChange,
            })
          : {
              id: t.id,
              frequency: t.frequency,
              proofOfProgress: "",
              parameter: t.parameter,
            }
      );

      dispatch({
        type: reduxAction.UPDATE_PARAMETER_DATA,
        payload: updatedData,
      });

      setEditId(0);
      setUpdateChange("");
      return;
    }
  };

  // const handleOnSave = () => {
  //   dispatch({
  //     type:reduxAction.UPDATE_FAMILYDATA,
  //     payload: { ...ShareGoalData , family : { familyColleagueList: familyData  } , reviewer: { parametersToReview: parameterdata , reviewerList: reviewerData } }
  //   })
  // }

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "ShareGoal saved successfully!",
    });
  };

  const handleOnSave = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(ShareGoalData),
      redirect: "follow",
    };

    await fetch(
      `http://dev.trackability.net.au:8082/api/sharegoals/save`,
      requestOptions
    )
      .then((res) =>
        res.json().then((result) => {
          if (result.responseStatus === 200) {
            showToast();
            navigation.navigate('Dashboard');

          }
          if (result.responseStatus === 400) {
            console.log(result.responseMessage);
          }
        })
      )
      .catch((err) => console.log(err));
  };

  useEffect(()=>{

    dispatch({
      type: reduxAction.UPDATE_FAMILYDATA,
      payload: {
        ...ShareGoalData,
        family: { familyColleagueList: familyData },
        reviewer: {
          parametersToReview: parameterdata,
          reviewerList: reviewerData,
        },
      },
    });

  },[reviewerData])

  return (
    <ScrollView className="p-2 bg-white">
      <PaperProvider>
        <SafeAreaView>
          <Text
            className="text-md font-popMedium pb-1"
            style={{ fontSize: 16, color: "#263238" }}
          >
            Trackability allows you to share your goals to Family, Friends,
            Colleagues, Motivators etc. You can also add a reviewer to track and
            monitor your goals...
          </Text>
          <Text
            className="text-md font-popMedium pb-1 mt-2"
            style={{ fontSize: 17, color: "#263238" }}
          >
            Select someone whom you want to share this goal with, you could add
            one more people
          </Text>
          <View className="mb-4">
            <RadioButton.Group
              onValueChange={(newValue) => setPeoplechange(newValue)}
              value={peoplechange}
            >
              <View className="flex-row">
                <View className="flex flex-row items-center">
                  <RadioButton.Android value="people" />
                  <Text
                    className="text-md font-popMedium"
                    style={{ fontSize: 16, color: "#263238" }}
                  >
                    Family friends / Colleagues
                  </Text>
                </View>
                <View className="flex flex-row items-center">
                  <RadioButton.Android value="reviewer" />
                  <Text
                    className="text-md font-popMedium "
                    style={{ fontSize: 16, color: "#263238" }}
                  >
                    Reviewer
                  </Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <View className="flex flex-row-reverse">
            {peoplechange === "people"
              ? !(familyData.length > 3) && (
                  <TouchableOpacity
                    className="flex flex-row ml-8"
                    onPress={() => setModalVisible1(true)}
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={25}
                      color={"#0D2B68"}
                    />
                    <Text
                      className="text-lg font-popMedium pb-3"
                      style={{ color: "#0D2B68" }}
                    >
                      Add People
                    </Text>
                  </TouchableOpacity>
                )
              : null}

            {peoplechange === "reviewer"
              ? !(reviewerData.length > 1) && (
                  <TouchableOpacity
                    className="flex flex-row ml-4"
                    onPress={() => setModalVisible2(true)}
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={25}
                      color={"#0D2B68"}
                    />
                    <Text
                      className="text-lg font-popMedium pb-3"
                      style={{ color: "#0D2B68" }}
                    >
                      Add Reviewer
                    </Text>
                  </TouchableOpacity>
                )
              : null}
          </View>

          {familyData.map((data, index) => {
            return (
              <View>
                {peoplechange === "people"
                  ? data.firstName !== null &&
                    data.firstName !== "" && (
                      <View>
                        <View
                          key={index}
                          className="border rounded p-2"
                          style={{ borderColor: "#D0D2D2" }}
                        >
                          <View className="flex flex-row justify-between">
                            <View>
                              <View className="flex-row" style={{ width: 140 }}>
                                <Text
                                  className="text-lg font-popMedium mr-1"
                                  style={{ color: "#0D2B68" }}
                                >
                                  {data.firstName}
                                </Text>
                                <Text
                                  className="text-lg font-popMedium"
                                  style={{ color: "#0D2B68" }}
                                >
                                  {data.lastName}
                                </Text>
                              </View>
                              <Text
                                className="text-sm font-popMedium mb-3"
                                style={{ color: "#54585A" }}
                              >
                                {data.email}
                              </Text>
                              <Text
                                className="text-sm font-popMedium mb-2"
                                style={{ color: "#54585A" }}
                              >
                                {data.phoneNo}
                              </Text>
                            </View>
                            <View className="flex-row gap-2">
                              <TouchableOpacity>
                                <Ionicons
                                  name="create-outline"
                                  size={26}
                                  color={"#3a86ff"}
                                  onPress={() => editFamily(index)}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <Ionicons
                                  name="trash-outline"
                                  size={25}
                                  color={"red"}
                                  onPress={() => deleteFamily(index)}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                          <View className="flex flex-row">
                            <View className="mr-8">
                              <Text
                                className="text-sm font-popMedium"
                                style={{ color: "#54585A", fontSize: 16 }}
                              >
                                Role
                              </Text>
                              <Text
                                className="text-sm font-popMedium mb-3"
                                style={{ color: "#54585A" }}
                              >
                                {data.role}
                              </Text>
                            </View>
                            <View>
                              <Text
                                className="text-sm font-popMedium"
                                style={{ color: "#54585A", fontSize: 16 }}
                              >
                                Reason to share
                              </Text>
                              <Text
                                className="text-sm font-popMedium mb-3"
                                style={{ color: "#54585A" }}
                              >
                                {data.shareReason}
                              </Text>
                            </View>
                          </View>
                          <View className="mr-7">
                            <Text
                              className="text-sm font-popMedium"
                              style={{ color: "#54585A", fontSize: 16 }}
                            >
                              Permissions
                            </Text>
                            <Text
                              className="text-sm font-popMedium mb-3"
                              style={{ color: "#54585A" }}
                            >
                              View, Mobile Notifications ({data.frequency} Once)
                            </Text>
                          </View>
                        </View>
                      </View>
                    )
                  : null}
              </View>
            );
          })}

          {reviewerData.map((data, index) => {
            return (
              <View>
                {peoplechange !== "people"
                  ? data.firstName !== null &&
                    data.firstName !== "" && (
                      <>
                        <View
                          key={index}
                          className="border rounded p-2"
                          style={{ borderColor: "#D0D2D2" }}
                        >
                          <View className="flex flex-row justify-between">
                            <View>
                              <View className="flex-row" style={{ width: 140 }}>
                                <Text
                                  className="text-lg font-popMedium mr-1"
                                  style={{ color: "#0D2B68" }}
                                >
                                  {data.firstName}
                                </Text>
                                <Text
                                  className="text-lg font-popMedium"
                                  style={{ color: "#0D2B68" }}
                                >
                                  {data.lastName}
                                </Text>
                              </View>
                              <Text
                                className="text-sm font-popMedium mb-3"
                                style={{ color: "#54585A" }}
                              >
                                {data.email}
                              </Text>
                              <Text
                                className="text-sm font-popMedium mb-2"
                                style={{ color: "#54585A" }}
                              >
                                {data.phoneNo}
                              </Text>
                            </View>
                            <View className="flex-row gap-2">
                              <TouchableOpacity>
                                <Ionicons
                                  name="create-outline"
                                  size={26}
                                  color={"#3a86ff"}
                                  onPress={() => editReview(index)}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <Ionicons
                                  name="trash-outline"
                                  size={25}
                                  color={"red"}
                                  onPress={() => deleteReviewer(index)}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                          <View className="flex flex-row">
                            <View className="mr-8">
                              <Text
                                className="text-sm font-popMedium"
                                style={{ color: "#54585A", fontSize: 16 }}
                              >
                                Role
                              </Text>
                              <Text
                                className="text-sm font-popMedium mb-3"
                                style={{ color: "#54585A" }}
                              >
                                Reviewer
                              </Text>
                            </View>
                            <View>
                              <Text
                                className="text-sm font-popMedium"
                                style={{ color: "#54585A", fontSize: 16 }}
                              >
                                Reason to share
                              </Text>
                              <Text
                                className="text-sm font-popMedium mb-3"
                                style={{ color: "#54585A" }}
                              >
                                {data.shareReason}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View>
                          <Text
                            className="text-lg font-popMedium"
                            style={{ color: "#263238" }}
                          >
                            Parameters to Review
                          </Text>
                          <View
                            className="border mb-3 rounded pl-3"
                            style={{ borderColor: "#D0D2D2" }}
                          >
                            {parameterdata.map((paramdata, index) => {
                              return (
                                <View className="flex flex-row items-center justify-between mt-2">
                                  <Text
                                    className="flex-1 font-popMedium"
                                    key={paramdata.id}
                                  >
                                    {paramdata.parameter}
                                  </Text>
                                  <View
                                    className="font-popMedium w-28"
                                    style={{ borderColor: "#D0D2D2" }}
                                  >
                                    <CustomSelect
                                      onChange={(itemValue) =>
                                        handleOnReviewFrequency(
                                          itemValue,
                                          paramdata.id
                                        )
                                      }
                                      data={[
                                        { label: "Daily", value: "daily" },
                                        { label: "Weekly", value: "weekly" },
                                        { label: "Monthly", value: "month" },
                                        { label: "Yearly", value: "yearly" },
                                      ]}
                                    />
                                  </View>
                                  <TouchableOpacity className="mr-1">
                                    <Ionicons
                                      name="document-text-outline"
                                      size={25}
                                      color={"red"}
                                    ></Ionicons>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    onPress={() => editMode(paramdata.id)}
                                  >
                                    <Ionicons
                                      name="create-outline"
                                      size={25}
                                      color={"#3a86ff"}
                                    />
                                  </TouchableOpacity>
                                </View>
                              );
                            })}
                          </View>
                        </View>
                      </>
                    )
                  : null}
              </View>
            );
          })}

          <View style={styles.container}>
            <Portal>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => setModalVisible1(false)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <ScrollView>
                      <View className="flex flex-row justify-between">
                        <Text
                          className="text-md font-popMedium"
                          style={{
                            color: "#263238",
                            fontSize: 18,
                            alignItems: "center",
                            marginBottom: 10,
                          }}
                        >
                          Add People
                        </Text>
                        <Ionicons
                          size={30}
                          name="close-outline"
                          style={{ color: "#444444" }}
                          onPress={handleOnCloseTab}
                        />
                      </View>
                      <View>
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          First Name
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={peopleFName}
                          onChangeText={handlePeopleFirstName}
                          placeholder="Enter First Name"
                          required
                        />
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          Last Name
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={peopleLName}
                          onChangeText={handlePeopleLastName}
                          placeholder="Enter Last Name"
                          required
                        />
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          Email
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={peopleEmail}
                          onChangeText={handlePeopleEmail}
                          placeholder="Enter Email"
                          required
                        />
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          Phone Number
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={peoplePhNo}
                          onChangeText={handlePeoplePhNo}
                          placeholder="Enter Phone Number"
                          required
                        />
                        <View>
                          <Text
                            className="text-sm font-popMedium mr-12"
                            style={{ color: "#263238", fontSize: 15 }}
                          >
                            Role
                          </Text>
                        </View>
                        <View
                          className="text-2xl font-popMedium mb-2"
                          style={{
                            borderColor: "#54585A",
                            borderWidth: 0.5,
                            borderRadius: 4,
                          }}
                        >
                          <CustomSelect
                            onChange={handlepeoplerole}
                            data={[
                              { label: "Nominated", value: "nominated" },
                              { label: "Primary", value: "primary" },
                              { label: "Secondary", value: "secondary" },
                              { label: "Others", value: "others" },
                            ]}
                          />
                        </View>
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          Reason to share
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={peopleReason}
                          onChangeText={handleReasonToShare1}
                          placeholder="Write Reason"
                        />
                        <View className>
                          <Text
                            className="text-sm font-popMedium mr-12"
                            style={{ color: "#263238", fontSize: 15 }}
                          >
                            Permissions
                          </Text>
                        </View>
                        <View
                          className="border rounded text-2xl font-popMedium "
                          style={{ borderColor: "#D0D2D2" }}
                        >
                          {/* <Picker
                            style={{ color: "#54585A" }}
                            selectedValue={permissions}
                            onValueChange={(itemValue) =>
                              handlepermission(itemValue)
                            }
                          >
                            <Picker.Item label="Select" value="reactJs" />
                            <Picker.Item label="Daily" value="daily" />
                            <Picker.Item label="Weekly" value="weekly" />
                            <Picker.Item label="Monthly" value="monthly" />
                            <Picker.Item label="Yearly" value="yearly" />
                          </Picker> */}
                          <CustomSelect
                            onChange={handlepermission}
                            data={[
                              { label: "Daily", value: "daily" },
                              { label: "Weekly", value: "weekly" },
                              { label: "Monthly", value: "month" },
                              { label: "Yearly", value: "yearly" },
                            ]}
                          />
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={
                              editclick ? updateFamilyData : addfamilydata
                            }
                            className="w-full p-2 mt-3 bg-blue-400 ml-auto rounded-sm"
                          >
                            <Text className="text-lg text-center font-popMedium text-white font-semibold">
                              {editclick
                                ? "Update FamilyData"
                                : "Add FamilyData"}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </Portal>
          </View>

          <View style={styles.container}>
            <Portal>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => setModalVisible2(false)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <ScrollView>
                      <View className="flex flex-row justify-between">
                        <Text
                          className="text-md font-popMedium"
                          style={{
                            color: "#263238",
                            fontSize: 18,
                            alignItems: "center",
                            marginBottom: 10,
                          }}
                        >
                          Add Reviewer
                        </Text>
                        <Ionicons
                          size={30}
                          name="close-outline"
                          style={{ color: "#444444" }}
                          onPress={handleCloseTab2}
                        />
                      </View>
                      <View>
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          First Name
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={reviewerFName}
                          onChangeText={handleReviewerFirstName}
                          placeholder="Enter First Name"
                        />
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          Last Name
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={reviewerLName}
                          onChangeText={handleReviewerLastName}
                          placeholder="Enter Last Name"
                        />
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          Email
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={reviewerEmail}
                          onChangeText={handleReviewerEmail}
                          placeholder="Enter Email"
                        />
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          Phone Number
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={reviewerPhNo}
                          onChangeText={handleReviewerPhNo}
                          placeholder="Enter Phone Number"
                        />
                        <Text
                          className="text-sm font-popMedium"
                          style={{ color: "#263238", fontSize: 15 }}
                        >
                          Reason to share
                        </Text>
                        <TextInput
                          className="border p-3 text-lg rounded mb-2"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={reviewerReason}
                          onChangeText={handleReasonToShare2}
                          placeholder="Write Reason"
                        />
                        <View>
                          <TouchableOpacity
                            onPress={
                              editclick2 ? updateReviwerData : addreviewerdata
                            }
                            className="w-full p-2 mt-3 bg-blue-400 ml-auto rounded-sm"
                          >
                            <Text className="text-lg text-center font-popMedium text-white font-semibold">
                              {editclick2
                                ? "Update ReviwerData"
                                : "Add ReviewerData"}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </Portal>
          </View>
          <View style={styles.container}>
            <Portal>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible3}
                onRequestClose={() => setModalVisible3(false)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <ScrollView>
                      <View className="flex flex-row">
                        <Text
                          className="text-md font-popMedium"
                          style={{
                            color: "#263238",
                            fontSize: 18,
                            alignItems: "center",
                            marginBottom: 10,
                          }}
                        >
                          Update Parameter
                        </Text>
                      </View>
                      <View>
                        <TextInput
                          className="border h-[12vh] rounded pb-10 pl-3 text-lg mb-3"
                          style={{ borderColor: "#D0D2D2" }}
                          placeholderTextColor={"#54585A"}
                          value={updateChange}
                          onChangeText={setUpdateChange}
                          placeholder="Enter Your Parameter"
                        />
                        <View className="flex-row justify-evenly gap-3">
                          <View>
                            <TouchableOpacity
                              onPress={() => setModalVisible3(false)}
                              className="w-40 p-2 mt-3 bg-gray-400 ml-auto rounded-sm"
                            >
                              <Text className="text-lg text-center font-popMedium text-white font-semibold">
                                Cancel
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <View>
                            <TouchableOpacity
                              onPress={handleUpdate}
                              className="w-40 p-2 mt-3 bg-blue-400 ml-auto rounded-sm"
                            >
                              <Text className="text-lg text-center font-popMedium text-white font-semibold">
                                Update
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </Portal>
          </View>
        </SafeAreaView>
      </PaperProvider>
      <View>
        <TouchableOpacity
          onPress={handleOnSave}
          className="p-2 bg-green-500 ml-auto my-10 w-1/3 rounded-lg"
        >
          <Text className="text-center text-lg text-white font-popMedium">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ShareGoal;
