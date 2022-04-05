<template>
<div class="form-group">
    <span>
        <slot /></span>
    <div>
        <input v-if="type == 'text' || type == 'password'" :type="type" :id="id" :placeholder="placeholder" @input="setInputData($event)">
        <select v-if="type == 'select'" :id="id" :placeholder="placeholder" @change="setInputData($event)">
            <option v-for="(item, index) in options" :key="index" :value="item.value" :disabled="item.disabled" :selected="item.selected">{{ item.text }}</option>
        </select>
        <div :id="`${id}-error`" class="err-alert"></div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },

        id: {
            type: String
        },

        placeholder: {
            type: String
        },

        options: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        setInputData(e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="scss">
.form-group {
    display: flex;
    align-items: center;
    column-gap: 16px;
    width: 100%;
    margin-bottom: 32px;

    span {
        flex: .8;
        font-size: 16px;
        font-weight: bold;
        color: #2c3e50;
        text-align: right;
    }

    >div {
        flex: 1.2;

        input, select {
            width: 100%;
            height: 40px;
            padding: 0 16px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
        }

        .err-alert {
            display: none;
            margin-top: 4px;
            font-size: 14px;
            font-style: italic;
            color: red;

            &.active {
                display: block;
            }
        }
    }
}
</style>
