const data = [
  {
    id: 'panel1',
    type: 'console',
    title: 'Translations',
    data: [
      {ts: '1', content: 'log 1 1'},
      {ts: '1', content: 'log 2 2', warning: true}
    ]
  },
  {
    id: 'panel2',
    type: 'console',
    title: 'Other warnings',
    data: [
      {'ts': '1', content: 'log 1'},
      {'ts': '2', content: 'log 2'}
    ]
  },
  {
    id: 'appState',
    type: 'console',
    title: 'App state',
    data: [
      {'ts': '1', content: {a: {b: 1, c: {a: 1}}}, type: 'json'},
      {'ts': '2', content: 'log 2'},
      {'ts': '1', content: {a: {b: 1, c: {a: 'text demo'}}}, type: 'json', warning: true},
      {'ts': '1', content: {a: {b: 1, c: {a: 1}}}, type: 'json', warning: true},
      {'ts': '1', content: {a: {b: 1, c: {a: 1}}}, type: 'json', warning: true},
    ]
  }
]

export default data;