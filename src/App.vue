<script setup>
import { useTestStore } from "./stores/test";
import { isSameEnumTest, ENUM_TEST } from "./enums/EnumTest";

const testStore = useTestStore();

function swapValues() {
  testStore.enumValue = isSameEnumTest(testStore.enumValue, ENUM_TEST.TEST) ? ENUM_TEST.OTHER : ENUM_TEST.TEST;
}

function patchValues(){
  testStore.$patch({enumValue: {"name": "new", value: "new"}});
}
</script>

<template>
  <div>
    <h1>The actual value is: {{ testStore.enumValue.name }} -> {{ testStore.enumValue.value }}</h1>
    <button @click="swapValues">Click me to swap value</button>
    <button @click="patchValues">Test patch</button>
    <div>
      <h1>Current values in the ENUM_TEST object:</h1>
      <div>
        <textarea rows="10" cols="50">{{ JSON.stringify(ENUM_TEST, null, 4) }}</textarea>
      </div>
    </div>
  </div>
</template>
