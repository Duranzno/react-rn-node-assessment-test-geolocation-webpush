import React from 'react';
import { SosafeData, Score } from 'common';
import { Text, View } from 'react-native';
import { tailwind } from 'tailwind';
interface Props {
  data: SosafeData;
}
export const DetailedData: React.FC<Props> = (props) => {
  const {
    data: { name, scores, ISOTime },
  } = props;
  return (
    <>
      <View
        style={[
          tailwind(
            'flex flex-col justify-between flex-1 font-semibold p-8 justify-between items-center',
          ),
        ]}
      >
        <Text style={tailwind('text-center text-sm text-grey')}>
          {new Date(ISOTime).toLocaleString()}
        </Text>
        <Text style={tailwind('text-center text-3xl font-black ')}>
          {name}
        </Text>
        <Text style={tailwind('text-center text-base ')}>
          Answers to questionary:
        </Text>
        <View style={tailwind('text-base')}>
          {scores.map((s) => (
            <ScoresView key={s.question} {...s} />
          ))}
        </View>
      </View>
    </>
  );
};
const ScoresView: React.FC<Score> = ({ question, answer }) => {
  const textStyle = tailwind('text-lg');
  return (
    <View
      style={tailwind(
        'w-20 flex flex-row justify-between items-center',
      )}
    >
      <Text style={textStyle}>{question}.</Text>
      <Text style={textStyle}>{answer}</Text>
    </View>
  );
};
