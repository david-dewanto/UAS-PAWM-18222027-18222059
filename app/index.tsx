import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>IELTS9</Text>
        </View>

        <View style={styles.navLinks}>
          <TouchableOpacity>
            <Text style={styles.navText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content Section */}
      <View style={styles.hero}>
        <View style={styles.content}>
          <View style={styles.heroContainer}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/images/landing.png')}
                style={styles.heroImage}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.heroTitle}>Master Your IELTS Skills!</Text>
            <Text style={styles.heroDescription}>
              Achieve your IELTS band 9 anytime, anywhere with IELTS9! Our
              AI-powered simulator helps you self-practice for the IELTS speaking
              test, job interviews, and everyday conversations!
            </Text>
          </View>
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

      <Text style={styles.footerText}>Learn For Free. Forever!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    paddingTop: height * 0.05,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.08,
    height: width * 0.08,
    marginRight: width * 0.02,
  },
  logoText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#63ce87',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navText: {
    fontSize: width * 0.04,
    fontWeight: '500',
    color: '#333',
  },

  hero: {
    padding: width * 0.05,
    backgroundColor: '#fff',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  heroContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginBottom: height * 0.02,
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    overflow: 'hidden',
  },
  textContent: {
    width: '100%',
    paddingHorizontal: width * 0.05,
  },
  heroTitle: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.02,
    fontFamily: 'Lexend',
    textAlign: 'left',
  },
  heroDescription: {
    fontSize: width * 0.045,
    color: '#666',
    marginBottom: height * 0.02,
    fontFamily: 'Lexend',
    textAlign: 'left',
  },
  heroImage: {
    width: '100%',
    height: '120%',
    transform: [{translateY: 0}],
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: width * 0.03,
    marginVertical: height * 0.02,
  },
  btn: {
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.06,
    borderRadius: 25,
    marginVertical: height * 0.01,
  },
  begin: {
    backgroundColor: '#63ce87',
  },
  learnMore: {
    backgroundColor: '#909090',
  },
  btnText: {
    color: 'white',
    fontFamily: 'Lexend',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    fontSize: width * 0.035,
    fontFamily: 'Lexend',
    marginBottom: height * 0.03,
  }
});

export default Index;