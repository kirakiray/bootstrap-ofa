# bs-button 使用文档

## 使用方法

### 引用资源

ofajs 后在引用 bs-button；

#### 直接引用

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
<script src="https://cdn.jsdelivr.net/gh/kirakiray/o_blog/bootstrap-ofa/components/bs-button/bs-button.js"></script>
```

#### 模块内使用

```javascript
load(
  "https://cdn.jsdelivr.net/gh/kirakiray/o_blog/bootstrap-ofa/components/bs-button -p"
);
```

### 使用标签

在页面中直接使用 `bs-button`

```html
<bs-button>我是按钮</bs-button>
```

<code-run>
    <template>
        <codehead>
            <!-- 新建后会被放到顶部的内容 -->
            <!-- 不会被展示到代码显示上 -->
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
            <script src="{{origin}}/components/bs-button/bs-button.js"></script>
        </codehead>
        <bs-button>我是按钮</bs-button>
    </template>
</code-run>

## 属性

### type 样式

Bootstrap 内置了几种预定义的按钮样式，每种样式都有自己的语义目的；

默认样式为 `primary`，所有样式预览如下；

```html
<bs-button>primary</bs-button>
<bs-button type="secondary">secondary</bs-button>
<bs-button type="success">success</bs-button>
<bs-button type="danger">danger</bs-button>
<bs-button type="warning">warning</bs-button>
<bs-button type="info">info</bs-button>
<bs-button type="light">light</bs-button>
<bs-button type="dark">dark</bs-button>
<bs-button type="link">link</bs-button>
```

<bs-button>primary</bs-button>
<bs-button type="secondary">secondary</bs-button>
<bs-button type="success">success</bs-button>
<bs-button type="danger">danger</bs-button>
<bs-button type="warning">warning</bs-button>
<bs-button type="info">info</bs-button>
<bs-button type="light">light</bs-button>
<bs-button type="dark">dark</bs-button>
<bs-button type="link">link</bs-button>

### outline 轮廓线模式

当你需要使用按钮，但不希望按钮带有背景颜色时，可以用轮廓线模式

```html
<bs-button outline>Primary</bs-button>
<bs-button type="secondary" outline>secondary</bs-button>
<bs-button type="success" outline>success</bs-button>
<bs-button type="danger" outline>danger</bs-button>
<bs-button type="warning" outline>warning</bs-button>
<bs-button type="info" outline>info</bs-button>
<bs-button type="light" outline>light</bs-button>
<bs-button type="dark" outline>dark</bs-button>
<bs-button type="link" outline>link</bs-button>
```

<bs-button outline>Primary</bs-button>
<bs-button type="secondary" outline>secondary</bs-button>
<bs-button type="success" outline>success</bs-button>
<bs-button type="danger" outline>danger</bs-button>
<bs-button type="warning" outline>warning</bs-button>
<bs-button type="info" outline>info</bs-button>
<bs-button type="light" outline>light</bs-button>
<bs-button type="dark" outline>dark</bs-button>
<bs-button type="link" outline>link</bs-button>

### disabled 禁用状态

通过为按钮元素设置 disabled 属性（此属性是布尔类型的）可以使按钮看起来处于禁用状态。处于禁用状态的按钮被设置了 pointer-events: none 属性，以防止触发鼠标悬停（hover）和活动（active）状态。

```html
<bs-button disabled>Primary</bs-button>
<bs-button type="secondary" disabled>secondary</bs-button>
<bs-button outline disabled>Primary</bs-button>
<bs-button type="secondary" outline disabled>secondary</bs-button>
```

<bs-button disabled>Primary</bs-button>
<bs-button type="secondary" disabled>secondary</bs-button>
<bs-button outline disabled>Primary</bs-button>
<bs-button type="secondary" outline disabled>secondary</bs-button>

### size 尺寸

```html
<bs-button>Primary</bs-button>
<bs-button>Primary</bs-button>
<bs-button size="small">Primary small</bs-button>
<bs-button size="large">Primary large</bs-button>
<bs-button type="success">Primary</bs-button>
<bs-button size="small" type="success">Primary small</bs-button>
<bs-button size="large" type="success">Primary large</bs-button>
```

<bs-button>Primary</bs-button>
<bs-button size="small">Primary small</bs-button>
<bs-button size="large">Primary large</bs-button>
<bs-button type="success">Primary</bs-button>
<bs-button size="small" type="success">Primary small</bs-button>
<bs-button size="large" type="success">Primary large</bs-button>

### active 激活状态样式

需要用到按钮组的激活样式，使用这个`active`属性

```html
<bs-button>Primary</bs-button>
<bs-button active>Primary active</bs-button>
<bs-button>Primary</bs-button>
<bs-button>Primary</bs-button>
```

<bs-button>Primary</bs-button>
<bs-button active>Primary active</bs-button>
<bs-button>Primary</bs-button>
<bs-button>Primary</bs-button>

## 事件

### 点击事件

触发按钮点击；

```html
<bs-button id="target_btn">Click Me</bs-button>

<script>
  $("#target_btn").on("click", (e) => {
    alert("click succeed!");
  });
</script>
```

<code-run>
    <template>
        <codehead>
            <!-- 新建后会被放到顶部的内容 -->
            <!-- 不会被展示到代码显示上 -->
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
            <script src="{{origin}}/components/bs-button/bs-button.js"></script>
        </codehead>
        <bs-button id="target_btn">Click Me</bs-button>
        <script>
        $('#target_btn').on("click", (e) => {
            alert("click succeed!");
          });
        </script>
    </template>
</code-run>
