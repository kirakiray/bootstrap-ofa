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

<code-run>
    <template>
        <codehead>
            <!-- 新建后会被放到顶部的内容 -->
            <!-- 不会被展示到代码显示上 -->
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
            <script src="{{dir}}/bs-input.js"></script>
        </codehead>
        <bs-input></bs-input>
    </template>
</code-run>

## 属性

### 基本属性

支持原生 input 的最基本属性

- type
- placeholder
- value
- disabled
- readonly

```html
type text: <bs-input type="text" placeholder="normal text"></bs-input>
<br />
type email:<bs-input type="email" placeholder="example@mail.com"></bs-input>
<br />
type password:
<bs-input type="password" placeholder="normal password"></bs-input>
<br />
type color: <bs-input type="color" value="#563d7c"></bs-input>
<br />
type file: <bs-input type="file"></bs-input>
<br />
<bs-input value="disabled input" disabled></bs-input>
<br />
<bs-input value="readonly input" readonly></bs-input>
```

type text: <bs-input type="text" placeholder="normal text"></bs-input>
<br>
type email:<bs-input type="email" placeholder="example@mail.com"></bs-input>
<br>
type password: <bs-input type="password" placeholder="normal password"></bs-input>
<br>
type color: <bs-input type="color" value="#563d7c"></bs-input>
<br>
type file: <bs-input type="file"></bs-input>
<br>
<bs-input value="disabled input" disabled></bs-input>
<br>
<bs-input value="readonly input" readonly></bs-input>

### size

```html
<bs-input placeholder="size lg" size="lg"></bs-input>
<br />
<bs-input placeholder="size normal"></bs-input>
<br />
<bs-input placeholder="size sm" size="sm"></bs-input>
```

<bs-input placeholder="size lg" size="lg"></bs-input>
<br>
<bs-input placeholder="size normal"></bs-input>
<br>
<bs-input placeholder="size sm" size="sm"></bs-input>

### textarea

```html
<bs-input
  type="textarea"
  row="4"
  placeholder="placeholder input text"
  style="width:500px;"
></bs-input>
```

<code-run>
    <template>
        <codehead>
            <!-- 新建后会被放到顶部的内容 -->
            <!-- 不会被展示到代码显示上 -->
            <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.js"></script>
            <script src="{{dir}}/bs-input.js"></script>
        </codehead>
      <bs-input type="textarea" row="4" placeholder="placeholder input text" style="width:500px;"></bs-input>
    </template>
</code-run>

### datalists

允许在 input 内创建类似 `select` 的数据列表；

```html
<bs-input placeholder="Type to search...">
  <datalist>
    <option value="San Francisco">
    <option value="New York">
    <option value="Seattle">
    <option value="Los Angeles">
    <option value="Chicago">
  </datalist>
</bs-input>
```

<bs-input placeholder="Type to search...">
  <datalist>
    <option value="San Francisco">
    <option value="New York">
    <option value="Seattle">
    <option value="Los Angeles">
    <option value="Chicago">
  </datalist>
</bs-input>
