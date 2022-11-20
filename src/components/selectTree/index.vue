<template>
  <el-select
    ref="mySelect"
    v-model="selectOptionValue"
    :multiple="true"
    value-key="id"
    v-bind="$attrs.select"
    :disabled="disabled"
    @remove-tag="removeTagHandler"
  >
    <el-option value="1" label="name" class="options">
      <el-tree
        id="tree-option"
        ref="selectTree"
        :default-expand-all="defaultExpandAll"
        show-checkbox
        node-key="id"
        :data="options"
        :props="{ label: 'name', children: 'children' }"
        @check="handleNodeClick"
      />
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref, defineEmits, watch } from "vue";
import { ElTree } from "element-plus";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  disabled: {
    type: Boolean,
    default: false
  },
  defaultExpandAll: {
    type: Boolean,
    default: true
  },
  options: {
    type: Array,
    default: () => []
  }
});

const selectOptionValue = computed({
  get: () => {
    if (props.modelValue.length > 0) {
      props.modelValue?.forEach((item) => {
        const node = selectTree.value?.getNode(item.areaId);
        if (!node) return;

        if (!node.isLeaf) {
          node.checked = false;
          node.indeterminate = true;
        } else {
          node.checked = true;
        }
      });
    }
    return props.modelValue;
  },
  set: (val) => {
    emits("update:modelValue", val);
  }
});

const selectTree = ref<InstanceType<typeof ElTree>>();

const activeIds = ref<number[]>();
const handleNodeClick = (node: any, target: any) => {
  const activeList = [...target.checkedNodes, ...target.halfCheckedNodes];
  activeList.forEach((item) => {
    item.label = item.name;
  });
  selectOptionValue.value = activeList;
  activeIds.value = [...target.checkedKeys, ...target.halfCheckedKeys];
};

const removeTagHandler = (node: any) => {
  selectTree.value?.setChecked(node, false, true);
  const nodes = selectTree.value?.getCheckedNodes(false, true);
  if (nodes) {
    selectOptionValue.value = nodes;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}
.el-select-dropdown__item.selected {
  font-weight: normal;
}
::v-deep().el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}
//.el-tree-node__label {
//  font-weight: normal;
//}
//.el-tree >>> .is-current .el-tree-node__label {
//  color: #409eff;
//  font-weight: 700;
//}
//.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
//  color: #606266;
//  font-weight: normal;
//}
.selectInput {
  padding: 0 5px;
  box-sizing: border-box;
}
</style>
