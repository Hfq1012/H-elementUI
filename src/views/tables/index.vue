<template>
  <div>
    <el-card class="anyCard">
      <div class="searchDiv">
        <el-input class="wh" type="text" placeholder="请输入订单号" v-model="sch_order"></el-input>
        <el-select class="wh" clearable placeholder="请选择状态" v-model="sch_status">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-date-picker class="wh" v-model="sch_data" type="date" placeholder="选择日期"></el-date-picker>
        <el-button type="primary" icon="el-icon-search" @click="searchTab()">搜索</el-button>
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addTab()">添加</el-button>
      </div>
      <el-table :data="tableData" border stripe>
        <el-table-column prop="id" label="序号" width="80"></el-table-column>
        <el-table-column prop="order" label="订单号"></el-table-column>
        <el-table-column prop="time" label="下单时间"></el-table-column>
        <el-table-column prop="address" label="配送地址" width="280"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="name" label="配送员"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | tagClass">{{ scope.row.status | statusText }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button type="primary" @click="editTable(scope.$index, scope.row)">编辑</el-button>
            <el-button
              type="warning"
              @click="toConfirm(scope.row)"
              :disabled="scope.row.status===1 ? false : true"
            >审核</el-button>
            <el-button
              type="success"
              @click="toSuccess(scope.row)"
              :disabled="scope.row.status===2 ? false : true"
            >完成</el-button>
            <el-button
              type="danger"
              @click="toDelete(scope.row)"
              :disabled="scope.row.status===3 ? false : true"
            >取消</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        lauout="total, sizes, prev, pager, next"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :current-page="currentPage"
        :total="total"
        class="fyDiv"
        @size-change="handleSize"
        @curren-change="handlePage"
      ></el-pagination>
    </el-card>
    <el-dialog title="订单修改" :visible.sync="diaIsShow" class="diaForm">
      <el-form
        ref="diaForm"
        :model="formData"
        :rules="rules"
        label-width="140px"
      >
        <el-form-item label="订单号">
          <el-input
            type="text"
            v-model="formData.order"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="订单时间" prop="time">
          <el-date-picker
            v-model="formData.time"
            type="datetime"
            placeholder="选择日期时间"
            value-format="yyyy-MM-dd HH:mm:ss"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="配送地址" prop="address">
          <el-input
            type="text"
            placeholder="请输入地址"
            v-model="formData.address"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input
            type="text"
            placeholder="请输入电话"
            v-model="formData.phone"
          ></el-input>
        </el-form-item>
        <el-form-item label="配送员" prop="name">
          <el-input
            type="text"
            placeholder="请输入姓名"
            v-model="formData.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="formData.status" placeholde="请选择状态">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeTab('diaForm', editType)"
            >确认</el-button
          >
          <el-button @click="diaIsShow = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sch_order: "",
      sch_status: null,
      sch_data: "",
      options: [
        { label: "待审核", value: 1 },
        { label: "配送中", value: 2 },
        { label: "已完成", value: 3 },
        { label: "已取消", value: 4 }
      ],
      tableData: [],
      pageSizes: [10, 20, 30, 40],
      pageSize: 10,
      currentPage: 1,
      total: 0,
      diaIsShow: false,
      formData: {},
      rules: {
        time: [{ required: true, message: '请输入时间', trigger: 'change' }],
        address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        status: [{ required: true, message: '请选择订单状态', trigger: 'change' }]
      }
      
    };
  },
  methods: {
    searchTab() {},
    addTab() {},
    editTable() {},
  }
};
</script>