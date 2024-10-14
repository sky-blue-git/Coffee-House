import React from 'react';
import {Text as ReactText, TextStyle} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';

interface TextProps {
  p?: keyof typeof SPACING;
  pl?: keyof typeof SPACING;
  pr?: keyof typeof SPACING;
  pt?: keyof typeof SPACING;
  pb?: keyof typeof SPACING;
  px?: keyof typeof SPACING;
  py?: keyof typeof SPACING;
  m?: keyof typeof SPACING;
  ml?: keyof typeof SPACING;
  mr?: keyof typeof SPACING;
  mt?: keyof typeof SPACING;
  mb?: keyof typeof SPACING;
  mx?: keyof typeof SPACING;
  my?: keyof typeof SPACING;
  fontSize?: keyof typeof FONTSIZE;
  color?: keyof typeof COLORS;
  fontFamily?: keyof typeof FONTFAMILY;
  children?: React.ReactNode;
  style?: TextStyle;
}

const Text: React.FC<TextProps> = ({
  p,
  pl,
  pr,
  pt,
  pb,
  px,
  py,
  m,
  ml,
  mr,
  mt,
  mb,
  mx,
  my,
  fontSize,
  color,
  fontFamily,
  children,
  style,
}) => {
  const getSpacing = (spacingKey?: keyof typeof SPACING) => {
    return spacingKey ? SPACING[spacingKey] : undefined;
  };
  const getFontSize = (fontsizeKey?: keyof typeof FONTSIZE) => {
    return fontsizeKey ? FONTSIZE[fontsizeKey] : undefined;
  };
  const getColor = (colorKey?: keyof typeof COLORS) => {
    return colorKey ? COLORS[colorKey] : undefined;
  };
  const getFontFamily = (fontFamilyKey?: keyof typeof FONTFAMILY) => {
    return fontFamilyKey ? FONTFAMILY[fontFamilyKey] : undefined;
  };

  const boxStyle: TextStyle = {
    padding: getSpacing(p),
    paddingLeft: getSpacing(pl),
    paddingRight: getSpacing(pr),
    paddingTop: getSpacing(pt),
    paddingBottom: getSpacing(pb),
    paddingHorizontal: getSpacing(px),
    paddingVertical: getSpacing(py),
    margin: getSpacing(m),
    marginLeft: getSpacing(ml),
    marginRight: getSpacing(mr),
    marginTop: getSpacing(mt),
    marginBottom: getSpacing(mb),
    marginHorizontal: getSpacing(mx),
    marginVertical: getSpacing(my),
    fontSize: getFontSize(fontSize),
    color: getColor(color),
    fontFamily: getFontFamily(fontFamily),
    ...style,
  };

  return <ReactText style={boxStyle}>{children}</ReactText>;
};

export default Text;
