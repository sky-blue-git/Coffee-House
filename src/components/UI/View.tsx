import React from 'react';
import {FlexAlignType, View as ReactView, ViewStyle} from 'react-native';
import {BORDERRADIUS, COLORS, SPACING} from '../../theme/theme';

interface ViewProps {
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
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: FlexAlignType;
  bg?: keyof typeof COLORS;
  borderRadius?: keyof typeof BORDERRADIUS;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const View: React.FC<ViewProps> = ({
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
  flexDirection,
  justifyContent,
  alignItems,
  bg,
  borderRadius,
  children,
  style,
}) => {
  const getSpacing = (spacingKey?: keyof typeof SPACING) => {
    return spacingKey ? SPACING[spacingKey] : undefined;
  };
  const getColor = (colorKey?: keyof typeof COLORS) => {
    return colorKey ? COLORS[colorKey] : undefined;
  };
  const getBorderRadius = (borderRadiusKey?: keyof typeof BORDERRADIUS) => {
    return borderRadiusKey ? BORDERRADIUS[borderRadiusKey] : undefined;
  };

  const boxStyle: ViewStyle = {
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
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    backgroundColor: getColor(bg),
    borderRadius: getBorderRadius(borderRadius),
    ...style,
  };

  return <ReactView style={boxStyle}>{children}</ReactView>;
};

export default View;
