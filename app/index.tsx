import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Main Content Section */}
      <View style={styles.hero}>
        <View style={styles.content}>
          <View style={styles.heroContainer}>
            {/* Hero Image */}
            <Image source={require('../assets/images/landing.png')} style={styles.heroImage} />
          </View>
          <Text style={styles.heroTitle}>Master Your IELTS Skills!</Text>
          <Text style={styles.heroDescription}>
            Achieve your IELTS band 9 anytime, anywhere with IELTS9! Our
            AI-powered simulator helps you self-practice for the IELTS speaking
            test, job interviews, and everyday conversations!
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.btn, styles.begin]}>
              <Text style={styles.btnText}>Begin Your Practice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.learnMore]}>
              <Text style={styles.btnText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer or other content */}
      <Text style={styles.content}>Learn For Free. Forever!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },

  // Hero Section Styles
  hero: {
    padding: 20,
    display: 'flex',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  content: {
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    fontFamily: 'Lexend',
  },
  heroDescription: {
    fontSize: 20,
    color: '#666',
    marginBottom: 8,
    fontFamily: 'Lexend',
  },
  heroImage: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
    borderRadius: 10,
    marginBottom: 35,
  },

  // Button Section Styles
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 10,
    marginBottom: 30,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 25,
    cursor: 'pointer',
    transition: '0.3s',
    marginTop: 2,
  },
  begin: {
    backgroundColor: '#63ce87', // Green color
    color: 'white',
  },
  learnMore: {
    backgroundColor: '#909090',
    color: '#333',
  },
  btnText: {
    color: 'white',
    fontFamily: 'Lexend',
  },
});

export default Index;
