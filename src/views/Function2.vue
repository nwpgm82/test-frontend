<template>
<div class="func2-container">
    <p>{{formatDate()}}</p>
    <p>{{formatDateThai()}} // รูปแบบปฏิทินไทย</p>
    <p>{{calDateMonth()}} // จำนวนวันในเดือนนี้</p>
    <p>{{calQuarter()}} // ไตรมาตรของเดือนนี้</p>
    <p>{{formatUnix()}} // Unix timestamp</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            date: '2020-08-10T14:54:52+07:00',
        }
    },

    methods: {
        formatDate() {
            const date = new Date(this.date)
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()
            let hour = date.getHours()
            let minute = date.getMinutes()

            if (day < 10) {
                day = '0' + day.toString()
            }

            if (month < 10) {
                month = '0' + month.toString()
            }

            if (hour < 10) {
                hour = '0' + hour.toString()
            }

            if (minute < 10) {
                minute = '0' + minute.toString()
            }

            return `${day}/${month}/${year} ${hour}:${minute}`
        },

        formatDateThai() {
            const date = new Date(this.date)

            return date.toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
        },

        calDateMonth() {
            const date = new Date(this.date)
            const month = date.getMonth() + 1
            const year = date.getFullYear()
            const date2 = new Date(year, month, 0)

            return date2.getDate()
        },

        calQuarter() {
            const date = new Date(this.date)

            return Math.floor((date.getMonth() / 3) + 1);
        },

        formatUnix() {
            const date = new Date(this.date)
            return Math.floor(date.getTime() / 1000)
        }
    },

    created() {
        this.formatDate()
    }
}
</script>

<style>
.func2-container {
    width: 500px;
    margin: auto;
    line-height: 30px;
}
</style>
