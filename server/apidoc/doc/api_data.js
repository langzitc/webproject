define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "登录接口",
    "name": "Login",
    "group": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"msg\": \"查询成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Denial",
            "description": "<p>无权限.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"msg\": \"接口错误\",\n  \"code\": \"404\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/common.js",
    "groupTitle": "public"
  },
  {
    "type": "get",
    "url": "/articlelist",
    "title": "文章列表",
    "name": "articlelist",
    "group": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>大小</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/client.js",
    "groupTitle": "public"
  },
  {
    "type": "get",
    "url": "/chanellist",
    "title": "栏目列表",
    "name": "chanellist",
    "group": "public",
    "version": "0.0.0",
    "filename": "src/api/client.js",
    "groupTitle": "public"
  },
  {
    "type": "get",
    "url": "/citylist",
    "title": "城市列表",
    "name": "citylist",
    "group": "public",
    "version": "0.0.0",
    "filename": "src/api/common.js",
    "groupTitle": "public"
  },
  {
    "type": "post",
    "url": "/destroy",
    "title": "注销",
    "name": "destroy",
    "group": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tocken",
            "description": "<p>密钥</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"msg\": \"注销成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/common.js",
    "groupTitle": "public"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "注册",
    "name": "register",
    "group": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"msg\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/common.js",
    "groupTitle": "public"
  },
  {
    "type": "get",
    "url": "/rolelist",
    "title": "角色列表",
    "name": "rolelist",
    "group": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tocken",
            "description": "<p>密钥</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/common.js",
    "groupTitle": "public"
  },
  {
    "type": "post",
    "url": "/upload/fileupload",
    "title": "文件上传",
    "name": "upload",
    "group": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tocken",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>文件</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"msg\": \"上传成功\",\n  \"path\": \"***.png\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/common.js",
    "groupTitle": "public"
  },
  {
    "type": "get",
    "url": "/userlist",
    "title": "用户列表",
    "name": "userlist",
    "group": "public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tocken",
            "description": "<p>密钥</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/common.js",
    "groupTitle": "public"
  }
] });
