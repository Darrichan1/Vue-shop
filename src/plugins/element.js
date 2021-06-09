import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, formItem, Input, Message, Container, Main, Aside, Footer, Header, Menu, Submenu, MenuItem, Breadcrumb, BreadcrumbItem, Card, Row, Col, Table, TableColumn, Switch, Tooltip, Pagination, Dialog, MessageBox, Tag, Tree, Select, Option, Cascader, Alert, Tabs, TabPane } from 'element-ui'
import treeTable from 'vue-table-with-tree-grid'
Vue.use(formItem)
Vue.use(Switch)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(Tag)
Vue.use(Tabs)
Vue.use(Form)
Vue.use(Pagination)
Vue.use(Alert)
Vue.use(Cascader)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.component('tree-table', treeTable)