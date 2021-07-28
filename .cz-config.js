module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复bug' },
    { value: 'docs', name: 'docs:     文档修改' },
    {
      value: 'style',
      name: 'style:    不影响功能的代码格式改动 \n(消除空格,prettier格式化，文件目录改动等)'
    },
    {
      value: 'refactor',
      name: 'refactor: 重构代码。不包括 bug 修复、功能新增'
    },
    {
      value: 'perf',
      name: 'perf:     性能优化'
    },
    { value: 'test', name: 'test:     添加、修改测试用例' },
    {
      value: 'chore',
      name: 'chore:    对构建过程或辅助工具和库的更改'
    },
    { value: 'revert', name: 'revert:   回滚' },
    { value: 'WIP', name: 'WIP:      开发过程的工作' }
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['element-ui', '对 element-ui 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  // allowCustomScopes: true,

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '\n选择你要提交的类型:',
    scope: '\n表明修改的范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '请输入自定义的范围:',
    subject: '填写提交节点的简短描述（必填）:\n',
    body: '提供改动的详细描述 (可选). 使用 "|" 换行:\n',
    breaking: '罗列破坏性更新事项 (可选):\n',
    footer: '罗列改动涉及到的issue相关 (可选). E.g.: #31, #34:\n',
    confirmCommit: '确认提交，回车默认yes?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['footer'],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
