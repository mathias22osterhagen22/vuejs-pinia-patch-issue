const ENUM_TEST = {
  TEST: { name: "TEST", value: "test value" },
  OTHER: { name: "OTHER", value: "other value" },
};

function isSameEnumTest(enumObjA, enumObjB){
    return enumObjA.value == enumObjB.value;
}

export { ENUM_TEST, isSameEnumTest};
