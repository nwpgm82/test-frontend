<template>
<div class="func3-container">
    <div v-for="i in 10" :key="i">
        <h2>Test case {{i}}</h2>
        <p>Array: {{ $data[`arr${i}`] }}</p>
        <p>2nd Max: {{ get2ndMax($data[`arr${i}`]) }}</p>
        <div class="line"></div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            arr1: [],
            arr2: [1],
            arr3: [1,2,3],
            arr4: [1,1],
            arr5: [1,2,3,4,5,6],
            arr6: [1,5,3,2,5,10],
            arr7: [100,5,3,2,99],
            arr8: [35,5,3,2,5,100],
            arr9: [1, 5, 101, 2, 5, 10],
            arr10: [10,10,9],
            first: 0,
            second: 0,
        }
    },

    methods: {
        get2ndMax(arr) {
            console.log(arr.length);
            let first = 0
            let second = 0

            if (!arr.length) return null

            if (arr.length === 1) return arr[0]

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > first) {
                    second = first
                    first = arr[i]

                } else if (arr[i] > second) {
                    second = arr[i]
                }
            }

            return second
        }
    },

    created() {

    }
}
</script>

<style lang="scss">
.func3-container {
    width: 500px;
    margin: auto;
    line-height: 30px;

    > div {
        margin-bottom: 16px;

        .line {
            width: 100%;
            border-bottom: 1px solid #000;
        }
    }
}
</style>
