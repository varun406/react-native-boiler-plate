import {Platform} from 'react-native';

const selectFont = (iosFont: string, androidFont: string) =>
  Platform.select({
    ios: iosFont,
    android: androidFont,
  });

const FONTFAMILIES = {
  POPPINS: {
    REGULAR: selectFont('Poppins-Regular', 'PoppinsRegular'),
    MEDIUM: selectFont('Poppins-Medium', 'PoppinsMedium'),
    SEMI_BOLD: selectFont('Poppins-SemiBold', 'PoppinsSemiBold'),
    BOLD: selectFont('Poppins-Bold', 'PoppinsBold'),
    EXTRA_BOLD: selectFont('Poppins-ExtraBold', 'PoppinsExtraBold'),

    LIGHT: selectFont('Poppins-Light', 'PoppinsLight'),
    ITALIC: selectFont('Poppins-Italic', 'PoppinsItalic'),
    MEDIUM_ITALIC: selectFont('Poppins-MediumItalic', 'PoppinsMediumItalic'),
    SEMI_BOLD_ITALIC: selectFont(
      'Poppins-SemiBoldItalic',
      'PoppinsSemiBoldItalic',
    ),
    BOLD_ITALIC: selectFont('Poppins-BoldItalic', 'PoppinsBoldItalic'),
    EXTRA_BOLD_ITALIC: selectFont(
      'Poppins-ExtraBoldItalic',
      'PoppinsExtraBoldItalic',
    ),
    LIGHT_ITALIC: selectFont('Poppins-LightItalic', 'PoppinsLightItalic'),
  },
};

export default FONTFAMILIES;
