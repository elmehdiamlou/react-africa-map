# React Africa Map

<p align="center"><a href="https://www.npmjs.com/package/react-africa-map" target="_blank"><img src="https://user-images.githubusercontent.com/90270530/159455398-b64ffa08-b6f0-4b22-a3cf-5adb3a0fad8e.png" width="600"></a></p>

<br>

<a href="https://codesandbox.io/s/react-africa-map-izkh37" target="_blank"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit On CodeSandbox" height="41" width="174"></a>


## Installation

```sh
npm install react-africa-map
```

```sh
yarn add react-africa-map
```

## Usage

1 . Require `react-africa-map` after installation

```js
import AfricaMap from 'react-africa-map';
```

2 . Include AfricaMap component

```jsx
<AfricaMap />
```

## Attribute list

<table class="table table-striped table-bordered">
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Values</th>
<th style="text-align:left">Default</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">size</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">1, 2, 3, 4, 5</td>
<td style="text-align:left">4</td>
<td style="text-align:left">Setup map size</td>
</tr>
<tr>
<td style="text-align:left">borderColor</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><code>Color</code></td>
<td style="text-align:left">black</td>
<td style="text-align:left">Popup border color</td>
</tr>
<tr>
<td style="text-align:left">fillColor</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><code>Color</code></td>
<td style="text-align:left">white</td>
<td style="text-align:left">Popup country color</td>
</tr>
<tr>
<td style="text-align:left">selectColor</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><code>Color</code></td>
<td style="text-align:left">black</td>
<td style="text-align:left">Popup selected/hovered country color</td>
</tr>
<tr>
<td style="text-align:left">selection</td>
<td style="text-align:left">Bool</td>
<td style="text-align:left">true, false</td>
<td style="text-align:left">false</td>
<td style="text-align:left">Enable/Disable select country action</td>
</tr>
<tr>
<td style="text-align:left">selected</td>
<td style="text-align:left">String[]</td>
<td style="text-align:left"><b>E.g.</b> ['MA', 'DZ', 'TN', 'LY', 'MR'] </td>
<td style="text-align:left">[]</td>
<td style="text-align:left">Setup Selected countries list</td>
</tr>
<tr>
<td style="text-align:left">animated</td>
<td style="text-align:left">Bool</td>
<td style="text-align:left">true, false</td>
<td style="text-align:left">false</td>
<td style="text-align:left">Activate/Deactivate animation</td>
</tr>
<tr>
<td style="text-align:left">animeStartFrom</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><code>Country code</code></td>
<td style="text-align:left">"MA"</td>
<td style="text-align:left">Setup the country where the animation will start</td>
</tr>
<tr>
<td style="text-align:left">animeLineColor</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><code>Color</code></td>
<td style="text-align:left">black</td>
<td style="text-align:left">Popup the line color that connect the countries</td>
</tr>
<tr>
<td style="text-align:left">animeTime</td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><b>E.g.</b> 500, 1000, 1500</td>
<td style="text-align:left">1000</td>
<td style="text-align:left">Animation interval timeout in millisecond (ms)</td>
</tr>
</tbody>
</table>

- **Color Examples** 
 
```
transparent, #0099ff, rgb(0, 153, 255)
```
 
- **Available countries code**

```js
[ 'MA', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CF', 'TD', 'CG', 'CD', 'DJ', 'EG', 'GQ', 'ER', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'CI', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'DZ', 'MZ', 'NA', 'NE', 'NG', 'RW', 'SN', 'SL', 'SO', 'ZA', 'SD', 'SZ', 'TZ', 'TG', 'TN', 'UG', 'ZM', 'ZW' ]
```

- **Examples**

![img](https://user-images.githubusercontent.com/90270530/159593142-e25ea831-ebfd-44bf-b98f-c2dbd49ad6ca.png)


<br>

### ???? If you liked this repository
### ??? Feel free to leave a star 
