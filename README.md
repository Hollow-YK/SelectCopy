<div align="center">

# 选择复制<br> Select & Copy

允许你选择，允许你复制。

<div>
    <a href="https://github.com/Hollow-YK/SelectCopy/releases"><img src="https://img.shields.io/github/release/Hollow-YK/SelectCopy" alt="latest version" /></a>
    <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/Hollow-YK/SelectCopy/total">
</div>
<div>
    <img alt="license" src="https://img.shields.io/github/license/Hollow-YK/SelectCopy">
    <img alt="commit" src="https://img.shields.io/github/commit-activity/m/Hollow-YK/SelectCopy">
    <img alt="stars" src="https://img.shields.io/github/stars/Hollow-YK/SelectCopy?style=social">
</div>
<br>

[English](README_en.md) | 简体中文 | [繁体中文](README_zh_tw.md)

</div>

---

> [!IMPORTANT]
>
> 如果您是从 GreasyFork 找到这的，建议前往下方的 [安装](#安装) 选择一个合适的源覆盖安装，避免因脚本失效或网络原因导致无法及时更新。

## 安装

根据需要选择合适的源，点击链接即可安装

> [!Caution]
>
> 你需要确保你安装了[篡改猴（油猴，Tampermonkey）](https://www.tampermonkey.net/)或[脚本猫（ScriptCat）](https://scriptcat.org/)等脚本加载器。

### 获取

- Github: [SelectCopy.user.js](https://github.com/Hollow-YK/SelectCopy/raw/refs/heads/main/SelectCopy.user.js)
- 脚本猫: [SelectCopy.user.js](https://scriptcat.org/scripts/code/4638/SelectCopy.user.js)

## 功能

-  CSS允许选择：将user-select设置为auto，允许选择但不处理事件阻止
- 允许选择：设置user-select为auto，并移除selectstart和mousedown事件阻止
- 允许复制：设置user-select为auto，并移除copy和cut事件阻止
- 强制允许选择：激进地重置样式，确保选择功能可用，可能影响页面布局
- 强制允许复制：激进地重置样式，确保复制功能可用，可能影响页面布局

> [!Tip]
>
> 大多数时候，允许复制会包含允许选择的功能。

> [!Warning]
>
> 虽然有做恢复按钮，但是不保证页面可以被完美复原。

## 致谢

### 其它

- [篡改猴（油猴，Tampermonkey）](https://www.tampermonkey.net/)、[脚本猫（ScriptCat）](https://scriptcat.org/)等脚本加载器
- `README.md`使用了[shields.io](https://shields.io/)、[contrib.rocks](https://contrib.rocks/)提供的内容

### 贡献/参与者

~~好像只有我自己~~

[![Contributors](https://contrib.rocks/image?repo=Hollow-YK/Yunhu_MinecraftStatus_Bot&max=105&columns=15)](https://github.com/Hollow-YK/Yunhu_MinecraftStatus_Bot/graphs/contributors)

## 声明

- 本软件使用 [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html) 开源。
- 本软件开源、免费，仅供学习交流使用。
- 免责声明：将此软件用于任何用途均与开发者无关，不对使用者的任何行为负责。

## 广告

如果觉得好用，可以给点一下右上角的星星~