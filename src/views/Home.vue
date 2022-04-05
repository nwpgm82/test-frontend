<template>
<form class="form-container" @submit="onSubmit">
    <h1>Test form and validation</h1>
    <x-input v-for="(item, index) in items" :key="index" :type="item.type" :id="item.id" :options="item.options" :placeholder="item.placeholder" @input="val => item.value = val">{{ item.header }}</x-input>
    <div class="button-flex">
        <div></div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </div>
    <div v-if="validatePassed" class="result-box">
        <h2>Result:</h2>
        <p>First Name: {{items[0]["value"]}}</p>
        <p>Last Name: {{items[1]["value"]}}</p>
        <p>E-mail: {{items[2]["value"]}}</p>
        <p>Gender: {{items[5]["value"]}}</p>
    </div>
</form>
</template>

<script>
import XInput from '@/components/XInput.vue'
export default {
    components: {
        XInput
    },

    data() {
        return {
            items: [{ // for for-loop
                header: 'First Name',
                id: 'firstname',
                placeholder: 'Please fill first name',
                type: 'text',
                value: ''
            }, {
                header: 'Last Name',
                id: 'lastname',
                placeholder: 'Please fill last name',
                type: 'text',
                value: ''
            }, {
                header: 'E-mail',
                id: 'email',
                placeholder: 'Please fill e-mail',
                type: 'email',
                value: ''
            }, {
                header: 'Password',
                id: 'password',
                placeholder: 'Please fill password',
                type: 'password',
                value: ''
            }, {
                header: 'Verify Password',
                id: 'verify',
                placeholder: 'Please fill verify password',
                type: 'password',
                value: ''
            }, {
                header: 'Gender',
                id: 'gender',
                placeholder: 'Please select a gender',
                type: 'select',
                options: [{
                    text: 'Please select a gender',
                    selected: true,
                    disabled: true,
                    value: ''
                }, {
                    text: 'Male',
                    value: 'Male'
                }, {
                    text: 'Female',
                    value: 'Female'
                }],
                value: ''
            }],

            inputError: 0,
            validatePassed: false
        }
    },

    methods: {
        onSubmit(e) {
            e.preventDefault();

            this.inputError = 0

            // check value in items
            for (let i = 0; i < this.items.length; i++) {
                const el = document.querySelector(`#${this.items[i].id}-error`)

                if (this.items[i].value == '') {
                    el.classList.add('active')
                    el.innerHTML = 'Please fill out this field'

                    this.inputError += 1
                } else {
                    el.classList.remove('active')
                }
            }

            // check e-mail syntax
            //eslint-disable-next-line
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const email = this.items.find(e => e.id == 'email').value

            if (email != '' && !re.test(email)) {
                document.querySelector(`#email-error`).classList.add('active')
                document.querySelector(`#email-error`).innerHTML = 'Invalid e-mail format'

                this.inputError += 1
            }

            // check password
            const password = this.items.find(e => e.id == 'password').value
            const verify = this.items.find(e => e.id == 'verify').value

            if (password != verify) {
                document.querySelector(`#verify-error`).classList.add('active')
                document.querySelector(`#verify-error`).innerHTML = 'Passwords do not match'

                this.inputError += 1
            }

            // check input error count
            if (this.inputError !== 0) {
                this.validatePassed = false
                return
            }

            this.validatePassed = true
        }
    }
}
</script>

<style lang="scss">
.form-container {
    width: 1000px;
    background-color: #cbd5e0;
    border-radius: 16px;
    margin: 0 auto;
    padding: 40px;

    h1 {
        text-align: center;
        margin-bottom: 24px;
    }

    .button-flex {
        display: flex;
        column-gap: 16px;

        >div:first-child {
            flex: .8
        }

        >div:last-child {
            flex: 1.2;

            button {
                padding: 8px 16px;
                font-size: 16px;
                color: #fff;
                background-color: #48bb78;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color .3s;

                &:hover {
                    background-color: #419d67;
                }
            }
        }
    }

    .result-box {
        margin-top: 32px;
        line-height: 30px;
    }
}
</style>
