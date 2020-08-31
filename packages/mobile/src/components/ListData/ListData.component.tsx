import React from 'react';
import { SosafeData, Score } from 'common';
import { Text, View } from 'react-native';
import { tailwind } from 'tailwind';
// import { Button } from 'components/Common';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
interface Props {
  data: SosafeData;
  goToDetails: (data: SosafeData) => void;
}

export const ListDataRow: React.FC<Props> = ({
  data,
  goToDetails,
}) => {
  const { scores, name, ISOTime } = data;
  const onPress = () => goToDetails(data);
  const summaryScore: string = (scores as Score[]).reduce(
    (acc, curr, i) => `${acc}${i > 0 ? ', ' : ''}${curr.question}`,
    'Answered: ',
  );
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={tailwind('flex flex-row justify-between items-center')}
      >
        <Avatar>
          <Text style={tailwind('text-white font-bold')}>
            {scores.length}
          </Text>
        </Avatar>
        <View style={tailwind('flex flex-col justify-between')}>
          <Text style={tailwind('font-bold text-lg')}>{name}</Text>
          <Text style={tailwind('font-light text-xs')}>
            {summaryScore}
          </Text>
        </View>
        {/* <Button onPress={onPress}>
        <Text>Go</Text>
      </Button> */}
        <Text
          style={tailwind('self-start text-sm text-grey font-bold')}
        >
          {new Date(ISOTime).toLocaleTimeString()}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
const Avatar: React.FC = ({ children }) => (
  <View
    style={tailwind(
      'rounded-full w-8 h-8 flex items-center justify-center bg-blue border-solid border-black border-2 rounded-full',
    )}
  >
    {children}
  </View>
);
