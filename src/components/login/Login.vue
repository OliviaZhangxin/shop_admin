<template>
  <el-row type='flex' justify='center' align='middle'>
    <el-col :span='8'>
      <el-form
    :model="loginForm"
    :rules="rules"
    ref="loginForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="startLogin('loginForm')">登录</el-button>
      <el-button @click="resetForm('loginForm')">重置</el-button>
    </el-form-item>
  </el-form>
    </el-col>
  </el-row>
</template>

<script>
// 引入axios
import axios from 'axios'
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 开始登陆
    startLogin (formName) {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) {
          return
        }
        // console.log('开始登陆了')
        // 发送请求开始登陆
        axios.post('http://localhost:8888/api/private/v1/login', this.loginForm).then(res => {
          console.log(res)
          // 判断成功
          if (res.data.meta.status === 200) {
            // 登录成功
            this.$message({
              message: '恭喜你，登录成功！',
              type: 'success ',
              duration: '800'
            })
            this.$router.push('/home')
          } else {
            // 登录失败
            this.$message({
              message: res.data.meta.msg,
              type: 'error',
              duration: '800'
            })
          }
        })
      })
    },
    resetForm (formName) {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style scoped>
/* 加scoped,样式只在当前组件内生效 */
/* * {
  margin: 0;
  padding: 0;
}
html,body,#app {
  height: 100%;
} */
.el-row {
  height: 100%;
  background: skyblue;
}
.el-col {
  background-color:white ;
  padding: 20px 30px;
  border-radius: 7px;
}
</style>
