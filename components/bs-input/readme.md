# bs-input 使用文档

## 使用方法

### 引用资源

ofajs 后在引用 bs-input；

#### 直接引用

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
<script src="https://cdn.jsdelivr.net/gh/kirakiray/o_blog/bootstrap-ofa/components/bs-input/bs-input.js"></script>
```

#### 模块内使用

```javascript
load(
  "https://cdn.jsdelivr.net/gh/kirakiray/o_blog/bootstrap-ofa/components/bs-input -p"
);
```

### 使用标签

在页面中直接使用 `bs-input`

```html
<bs-input></bs-input>
```

<bs-input></bs-input>

## 属性

### 基本属性

支持原生 input 的最基本属性

- type
- placeholder
- value

```html
type text: <bs-input type="text" placeholder="normal text"></bs-input>
<br />
type email:<bs-input type="email" placeholder="example@mail.com"></bs-input>
<br />
type password:
<bs-input type="password" placeholder="normal password"></bs-input>
<br />
type color: <bs-input type="color" value="#563d7c"></bs-input>
```

type text: <bs-input type="text" placeholder="normal text"></bs-input>
<br>
type email:<bs-input type="email" placeholder="example@mail.com"></bs-input>
<br>
type password: <bs-input type="password" placeholder="normal password"></bs-input>
<br>
type color: <bs-input type="color" value="#563d7c"></bs-input>

### textarea

<bs-input type="textarea" row="4" placeholder="placeholder input text" style="width:500px;"></bs-input>
