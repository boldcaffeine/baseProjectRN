import {View, Text, TextInput} from 'react-native';

import React, {useState, useEffect, useRef} from 'react';

const UncontrolledTextInput = () => <TextInput />;

function UncontrolledTextInput2() {
  const textRef = useRef('');
  return <TextInput onChangeText={text => (textRef.current = text)} />;
}

function ControlledTextInput() {
  const [text, setText] = useState('');
  return <TextInput value={text} onChangeText={setText} />;
}

function SyncTextInput() {
  const [text, setText] = useState('');
  return (
    <View>
      <Text> 333</Text>
      <TextInput
        autoFocus
        onChangeText={text => {
          const time = Date.now();
          while (Date.now() - time <= 1000) {}
          setText(text);
        }}
      />
      <TextInput
        unstable_onChangeSync={event => {
          const text = event.nativeEvent.text;
          const time = Date.now();
          while (Date.now() - time <= 1000) {}
          setText(text);
        }}
      />
    </View>
  );
}

function AutoNextFocusTextInputs() {
  const ref1 = useRef(null);

  useEffect(() => {
    ref1.current?.focus();
  });

  return <TextInput ref={ref1} />;
}

function AutoNextFocusTextInputs3() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  return (
    <>
      <TextInput ref={ref1} onSubmitEditing={ref2.current?.focus} />
      <TextInput ref={ref2} onSubmitEditing={ref3.current?.focus} />
      <TextInput ref={ref3} />
    </>
  );
}

export default function InputList() {
  return (
    <View>
      <UncontrolledTextInput></UncontrolledTextInput>
      <UncontrolledTextInput2></UncontrolledTextInput2>
      <ControlledTextInput></ControlledTextInput>
      <SyncTextInput></SyncTextInput>
      <AutoNextFocusTextInputs></AutoNextFocusTextInputs>
      <Text>999</Text>
      <AutoNextFocusTextInputs3></AutoNextFocusTextInputs3>
    </View>
  );
}
