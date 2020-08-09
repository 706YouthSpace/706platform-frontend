<template>
    <div class="activity">
        <div class="activity__header">
            <p class="activity__title">组织的活动</p>
            <div class="activity__search">
                <el-input placeholder="请输入内容" v-model="query" size="mini">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
        <div class="activity__content">
            <el-table style="width: 100%"
                      :data="table.data">
                <el-table-column
                        v-for="(column,index) in table.columns"
                        :key="index"
                        :label="column.name"
                        :width="column.width">
                    <template slot-scope="scope">
                        <div class="activity__table__title" v-if="column.prop === 'name'">
                            <img :src="scope.row.imgUrl"/>
                            <p>{{scope.row.name}}</p>
                        </div>
                        <template v-else-if="column.prop === 'operate'">
                            <el-button size="mini" type="success">编辑</el-button>
                            <el-button size="mini">详情</el-button>
                        </template>
                        <template v-else>
                            {{scope.row[column.prop]}}
                        </template>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="activity__footer">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActivityOrganize",
        data() {
            return {
                query: '',
                table: {
                    columns: [
                        {
                            name: '活动',
                            prop: 'name'
                        },
                        {
                            name: '系列',
                            prop: 'series',
                            width: 100
                        },
                        {
                            name: '时间',
                            prop: 'time'
                        },
                        {
                            name: '状态',
                            prop: 'status',
                            width: 80
                        },
                        {
                            name: '报名人数',
                            prop: 'num',
                            width: 80
                        },
                        {
                            name: '门票收入',
                            prop: 'income',
                            width: 80
                        },
                        {
                            name: '操作',
                            prop: 'operate'
                        }
                    ],
                    data: [
                        {
                            name: '什么是哲学的基础',
                            imgUrl: require('@/assets/images/banner.png'),
                            series: '迈向星空子项',
                            time: '2020-08-21 10:00:00',
                            site: '北京市海淀区',
                            status: '报名中',
                            num: 1000,
                            income: 10000
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .activity {
        min-height: 500px;
        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__content {
            margin-top: 20px;
        }

        &__table {
            &__title {
                img {
                    width: 100px;
                }
            }
        }

        &__footer {
            margin-top: 20px;
            text-align: center;
        }
    }
</style>
