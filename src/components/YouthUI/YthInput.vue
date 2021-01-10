<<<<<<< HEAD
<template>
  <div class="yth-input"
       :class="{'yth-input--focus': isFocus}">
    <input ref="input"
           class="yth-input__content"
           :placeholder="placeholder"
           :type="nativeType || type"
           @input="handleInput"
           @focus="handleFocus"
           @blur="handleBlur" />
    <span class="yth-input__suffix">
      <slot name="suffix">
        <span v-if="type==='password'"
              class="yth-input__icon">
          <i v-if="isPassword"
             class="fa fa-eye"
             @click="setInputType('text')"></i>
          <i v-else
             class="fa fa-eye-slash"
             @click="setInputType('password')"></i>
        </span>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'YthInput',
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      isFocus: false,
      nativeType: ''
    }
  },
  computed: {
    isPassword () {
      return this.nativeType === 'password'
    }
  },
  methods: {
    handleFocus () {
      this.isFocus = true
    },
    handleBlur () {
      this.isFocus = false
    },
    handleInput (event) {
      this.$emit('input', event.target.value || '')
      this.$nextTick(this.setNativeInputValue)
    },
    setNativeInputValue () {
      const input = this.$refs.input
      if (!input) return
      if (input.value === this.value) return
      input.value = this.value
    },
    setInputType (type = '') {
      this.nativeType = type
    }
  }
}
</script>

<style scoped lang="less">
.yth-input {
  display: flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    border-color: #c0c4cc;
  }

  &.yth-input--focus {
    border-color: #0b800b;
  }
  &__content {
    flex: 1 1;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    outline: none;
    color: #606266;
    background: none;
    border: none;
    box-sizing: border-box;
  }
  &__suffix {
    display: flex;
    flex: 0 0 auto;
    padding-right: 15px;
    color: #7b7b7b;
  }
  &__icon {
    cursor: pointer;
  }
}
</style>
=======
<template>
  <div class="yth-input"
    :class="{'yth-input--focus': isFocus}">
    <input
      ref="input"
      class="yth-input__content"
      :placeholder="placeholder"
      :type="nativeType || type"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"/>
    <span class="yth-input__suffix">
      <slot name="suffix">
        <span v-if="type==='password'" class="yth-input__icon">
          <i v-if="isPassword" class="fa fa-eye-slash" @click="setInputType('text')"></i>
          <i v-else class="fa fa-eye" @click="setInputType('password')"></i>
        </span>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'YthInput',
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      isFocus: false,
      nativeType: ''
    }
  },
  watch: {
    type: {
      handler: function (val) {
        this.nativeType = val
      },
      immediate: true
    }
  },
  computed: {
    isPassword () {
      return this.nativeType === 'password'
    }
  },
  methods: {
    handleFocus () {
      this.isFocus = true
    },
    handleBlur () {
      this.isFocus = false
    },
    handleInput (event) {
      this.$emit('input', event.target.value || '')
      this.$nextTick(this.setNativeInputValue)
    },
    setNativeInputValue () {
      const input = this.$refs.input
      if (!input) return
      if (input.value === this.value) return
      input.value = this.value
    },
    setInputType (type = '') {
      this.nativeType = type
    }
  }
}
</script>

<style scoped lang="less">
  .yth-input {
    display: flex;
    align-items: center;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    &:hover {
      border-color: #c0c4cc;
    }

    &.yth-input--focus {
      border-color: #0b800b;
    }
    &__content {
      flex: 1 1;
      height: 40px;
      padding: 0 15px;
      line-height: 40px;
      outline: none;
      color: #606266;
      background: none;
      border: none;
      box-sizing: border-box;
    }
    &__suffix {
      display: flex;
      flex: 0 0 auto;
      padding-right: 15px;
      color: #7b7b7b;
    }
    &__icon {
      cursor: pointer;
    }
  }
</style>
>>>>>>> feature/register
