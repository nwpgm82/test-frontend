<template>
<div style="text-align: center;">
    {{result}}
</div>
</template>

<script>
import products from '@/exam-data.json'
export default {
    data() {
        return {
            productArr: products,
            result: []
        }
    },

    methods: {
        filterData() {
            this.productArr = this.productArr.filter(e => e.is_editable_price === false) // [get] is_editable_price = false
            this.productArr = this.productArr.map(e => { // map new array
                return {
                    name: e.name,
                    totalSubProductWeight: e.products.reduce((sum, num) => sum + num.weight, 0) // calculate weight of sub products
                }
            })

            this.result = this.productArr // assign value to this.result
        }
    },

    created() {
        this.filterData()
    }
}
</script>

<style>

</style>
