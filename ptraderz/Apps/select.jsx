import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';

const userTypeOptions = ['buyer', 'seller', 'invigilator'];

const FormExample = () => {
  const [userType, setUserType] = useState('');

  const handleFilePick = async (setFieldValue, fieldName) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });
      if (result.type === 'success') {
        setFieldValue(fieldName, result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        email: '',
        userType: '',
        location: '',
        dob: '',
        gender: '',
        address: '',
        commodity: '',
        accountNumber: '',
        confirmAccountNumber: '',
        accountName: '',
        ifscCode: '',
        accountType: '',
        udhyamAadhar: null,
        gstCertificate: null,
        fssaiRegistration: null,
        currentAccountCheque: null,
        shopLicense: null,
        tradeCertificate: null,
        otherShopDocuments: null,
        invigilatorGender: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        number: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        userType: Yup.string().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />

          <Text style={styles.label}>Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('number')}
            onBlur={handleBlur('number')}
            value={values.number}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />

          <Text style={styles.label}>User Type</Text>
          <Picker
            selectedValue={values.userType}
            onValueChange={(itemValue) => {
              setFieldValue('userType', itemValue);
              setUserType(itemValue);
            }}
          >
            <Picker.Item label="Select a user type" value="" />
            {userTypeOptions.map((type) => (
              <Picker.Item key={type} label={type} value={type} />
            ))}
          </Picker>

          {/* Dynamic Fields */}
          {userType === 'buyer' && (
            <>
              <Text style={styles.label}>Location</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('location')}
                onBlur={handleBlur('location')}
                value={values.location}
              />

              <Text style={styles.label}>Date of Birth</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('dob')}
                onBlur={handleBlur('dob')}
                value={values.dob}
              />

              <Text style={styles.label}>Gender</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('gender')}
                onBlur={handleBlur('gender')}
                value={values.gender}
              />
            </>
          )}

          {userType === 'seller' && (
            <>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
              />

              <Text style={styles.label}>Commodity</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('commodity')}
                onBlur={handleBlur('commodity')}
                value={values.commodity}
              />

              <Text style={styles.label}>Account Number</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('accountNumber')}
                onBlur={handleBlur('accountNumber')}
                value={values.accountNumber}
              />

              <Text style={styles.label}>Confirm Account Number</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('confirmAccountNumber')}
                onBlur={handleBlur('confirmAccountNumber')}
                value={values.confirmAccountNumber}
              />

              <Text style={styles.label}>Account Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('accountName')}
                onBlur={handleBlur('accountName')}
                value={values.accountName}
              />

              <Text style={styles.label}>IFSC Code</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('ifscCode')}
                onBlur={handleBlur('ifscCode')}
                value={values.ifscCode}
              />

              <Text style={styles.label}>Account Type</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('accountType')}
                onBlur={handleBlur('accountType')}
                value={values.accountType}
              />

              <Text style={styles.label}>Upload Udhyam Aadhar</Text>
              <TouchableOpacity onPress={() => handleFilePick(setFieldValue, 'udhyamAadhar')}>
                <Text style={styles.button}>Choose PDF</Text>
              </TouchableOpacity>
              {values.udhyamAadhar && <Text>{values.udhyamAadhar.name}</Text>}

              <Text style={styles.label}>Upload GST Certificate</Text>
              <TouchableOpacity onPress={() => handleFilePick(setFieldValue, 'gstCertificate')}>
                <Text style={styles.button}>Choose PDF</Text>
              </TouchableOpacity>
              {values.gstCertificate && <Text>{values.gstCertificate.name}</Text>}

              <Text style={styles.label}>Upload FSSAI Registration</Text>
              <TouchableOpacity onPress={() => handleFilePick(setFieldValue, 'fssaiRegistration')}>
                <Text style={styles.button}>Choose PDF</Text>
              </TouchableOpacity>
              {values.fssaiRegistration && <Text>{values.fssaiRegistration.name}</Text>}

              <Text style={styles.label}>Upload Current Account Cheque</Text>
              <TouchableOpacity onPress={() => handleFilePick(setFieldValue, 'currentAccountCheque')}>
                <Text style={styles.button}>Choose PDF</Text>
              </TouchableOpacity>
              {values.currentAccountCheque && <Text>{values.currentAccountCheque.name}</Text>}

              <Text style={styles.label}>Upload Shop and Establishment Licence</Text>
              <TouchableOpacity onPress={() => handleFilePick(setFieldValue, 'shopLicense')}>
                <Text style={styles.button}>Choose PDF</Text>
              </TouchableOpacity>
              {values.shopLicense && <Text>{values.shopLicense.name}</Text>}

              <Text style={styles.label}>Upload Trade Certificate</Text>
              <TouchableOpacity onPress={() => handleFilePick(setFieldValue, 'tradeCertificate')}>
                <Text style={styles.button}>Choose PDF</Text>
              </TouchableOpacity>
              {values.tradeCertificate && <Text>{values.tradeCertificate.name}</Text>}

              <Text style={styles.label}>Upload Other Shop Documents</Text>
              <TouchableOpacity onPress={() => handleFilePick(setFieldValue, 'otherShopDocuments')}>
                <Text style={styles.button}>Choose PDF</Text>
              </TouchableOpacity>
              {values.otherShopDocuments && <Text>{values.otherShopDocuments.name}</Text>}
            </>
          )}

          {userType === 'invigilator' && (
            <>
              <Text style={styles.label}>Gender</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('invigilatorGender')}
                onBlur={handleBlur('invigilatorGender')}
                value={values.invigilatorGender}
              />
            </>
          )}

          <Button onPress={handleSubmit} title="Submit" />
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default FormExample;
