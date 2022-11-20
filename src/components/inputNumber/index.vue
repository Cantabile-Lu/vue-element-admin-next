<template>
  <div class="input-number-range" :class="{ 'is-disabled': disabled }">
    <div class="flex">
      <div class="from">
        <el-input
          ref="input_from"
          v-model="inputForm"
          :disabled="disabled"
          placeholder="最小值"
          @change="handleInputChangeFrom"
        />
      </div>
      <div class="center">~</div>
      <div class="to">
        <el-input
          ref="input_to"
          v-model="inputTo"
          :disabled="disabled"
          placeholder="最大值"
          @change="handleInputChangeTo"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, defineEmits, defineExpose } from "vue";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  precision: {
    type: [Number, String],
    default: "0"
  }
});

const emit = defineEmits(["update:inputForm", "update:inputTo", "reset"]);

const inputForm = ref();
const inputTo = ref();

const toPrecision = (num: number, precision: any) => {
  return parseFloat(
    Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision) + ""
  );
};

// from输入框change事件
const handleInputChangeFrom = (value: string) => {
  // 初始化数字精度
  const num = setPrecisionValue(value);
  inputForm.value = typeof num === "number" ? num : 0;
  // 如果from > to 将from值替换成to
  if (typeof inputTo.value === "number") {
    inputForm.value =
      parseFloat(inputForm.value) <= parseFloat(inputTo.value + "")
        ? inputForm.value
        : inputTo.value;
  }
  emit("update:inputForm", inputForm.value);
};

// 设置成精度数字
const setPrecisionValue = (value: string) => {
  if (props.precision !== undefined) {
    return toPrecision(+value, props.precision);
  }
  return null;
};

// to输入框change事件
const handleInputChangeTo = (value: string) => {
  // 初始化数字精度
  const num = setPrecisionValue(value);
  // inputTo.value = Number.isNaN(num) ? 0 : num
  inputTo.value = typeof num === "number" ? num : 0;

  if (typeof inputForm.value === "number") {
    inputTo.value =
      parseFloat(inputTo.value) >= parseFloat(inputForm.value + "")
        ? inputTo.value
        : inputForm.value;
  }
  emit("update:inputTo", inputTo.value);
};

const reset = () => {
  inputForm.value = undefined;
  inputTo.value = undefined;
};
defineExpose({
  reset
});
</script>
<style lang="scss" scoped>
// 取消element原有的input框样式
::v-deep().el-input__wrapper {
  box-shadow: 0 0 0 0;
  .el-input__inner {
    border: 0px;
    margin: 0;
    //padding: 0 15px;
    background-color: transparent;
  }
}

.input-number-range {
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  .center {
    margin-top: 1px;
  }
}
.is-disabled {
  background-color: #eef0f6;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>
