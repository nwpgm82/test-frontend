<template>
<div class="pokemon-container">
    <h1>Test fetch API</h1>
    <div v-if="!loaded" class="skeleton-box">
        <div class="skeleton-content" v-for="i in 18" :key="i">
            <div class="img-skeleton"></div>
            <div class="text-skeleton"></div>
        </div>
    </div>
    <div v-if="loaded" class="pokemon-box">
        <div class="pokemon-content" v-for="(item, index) in pokemon" :key="index">
            <div class="img-pokemon">
                <img :src="item.sprites.front_default" alt="pokemon-img">
            </div>
            <div class="text-pokemon">{{ item.name }}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            loaded: false,
            pokemon: []
        }
    },

    methods: {
        fetchData() {
            for (let i = 1; i <= 104; i++) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    .then(response => response.json())
                    .then(data => {
                        this.pokemon.push(data)
                    });
            }

            this.$nextTick(() => {
                setTimeout(() => { // เอาไว้ดู skeleton
                    this.loaded = true
                }, 1000)
            })
        }
    },

    created() {
        this.fetchData()
    }
}
</script>

<style lang="scss">
.pokemon-container {
    width: 100%;
    background-color: #e2e8f0;
    border-radius: 16px;
    padding: 40px;

    h1 {
        text-align: center;
        margin-bottom: 24px;
    }

    .skeleton-box {
        display: flex;
        justify-content: center;
        gap: 4%;
        flex-wrap: wrap;

        .skeleton-content {
            flex: 0 0 calc(16.6% - 4%);
            margin-bottom: 4%;

            .img-skeleton {
                border-radius: 8px;
                background-color: #d1dae4;
                aspect-ratio: 4 / 3;
            }

            .text-skeleton {
                margin-top: 16px;
                width: 100%;
                height: 40px;
                border-radius: 8px;
                background-color: #b1bccc;
            }
        }
    }

    .pokemon-box {
        display: flex;
        justify-content: center;
        gap: 4%;
        flex-wrap: wrap;

        .pokemon-content {
            flex: 0 0 calc(16.6% - 4%);
            margin-bottom: 4%;

            .img-pokemon {
                border-radius: 8px;
                aspect-ratio: 4 / 3;

                img {
                    height: 100%;
                    display: block;
                    margin: auto;
                }
            }

            .text-pokemon {
                margin-top: 16px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 8px;
                border-radius: 8px;
                background-color: #000;
                color: #fff;
            }
        }
    }
}
</style>
