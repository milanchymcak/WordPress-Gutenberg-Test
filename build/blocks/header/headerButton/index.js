!function(){"use strict";var e=window.wp.element,t=window.wp.blocks,r=window.wp.i18n,a=window.wp.components,o=window.wp.blockEditor;function l(t){const[r,o]=(0,e.useState)(void 0===t.default?"#fff":t.default),l=(Math.random()+1).toString(36).substring(7);return(0,e.createElement)(a.BaseControl,{label:t.label,id:l,help:t.help},(0,e.createElement)(a.ColorPicker,{color:r,id:l,onChange:e=>{t.setAttributes({[t.target]:e}),o(e.toString())},copyFormat:"hex"}))}function n(){return(0,e.createElement)("hr",{className:"mchymcak-separator"})}var i=JSON.parse('{"u2":"mchymcak/headerbutton"}'),d=JSON.parse('{"text":{"type":"string","selector":"a","default":"Poptávka"},"href":{"type":"string","selector":"a","default":"#"},"type":{"type":"string","selector":"a","attribute":"type","default":"submit"},"bg_Color":{"type":"string","selector":"a","attribute":"background-color","default":"#af0b2b"},"text_Color":{"type":"string","selector":"a","attribute":"color","default":"#fff"},"border_Color":{"type":"string","selector":"a","attribute":"border-color","default":"#af0b2b"},"border_Width":{"type":"string","selector":"a","attribute":"border-width","default":"1px"}}');(0,t.registerBlockType)(i.u2,{attributes:d,edit:t=>{const{attributes:i,setAttributes:d}=t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(a.PanelBody,{initialOpen:!1,title:(0,r.__)("Nastavení Barev","text-domain-example")},(0,e.createElement)(l,{attributes:i,setAttributes:d,label:(0,r.__)("Barva Textu","text-domain-example"),target:"text_Color",default:i.text_Color}),(0,e.createElement)(n,null),(0,e.createElement)(l,{attributes:i,setAttributes:d,label:(0,r.__)("Barva Pozadí","text-domain-example"),target:"bg_Color",default:i.bg_Color}),(0,e.createElement)(n,null),(0,e.createElement)(l,{attributes:i,setAttributes:d,label:(0,r.__)("Barva Okrajů","text-domain-example"),target:"border_Color",default:i.border_Color}),(0,e.createElement)(n,null),(0,e.createElement)(a.RangeControl,{label:(0,r.__)("Tlouštka Okrajů","text-domain-example"),value:i.border_Width,onChange:e=>d({border_Width:e}),min:0,max:10,initialPosition:1,renderTooltipContent:e=>e+"px"})),(0,e.createElement)(a.PanelBody,{initialOpen:!1,title:(0,r.__)("Nastavení Odkazu","text-domain-example")},(0,e.createElement)(a.TextControl,{label:(0,r.__)("Odkaz Href","text-domain-example"),value:i.href,onChange:e=>d({href:e})}))),(0,e.createElement)(o.BlockControls,{group:"block"}),(0,e.createElement)("div",(0,o.useBlockProps)({className:"header-special-button"}),(0,e.createElement)(o.RichText,{tagName:"a",href:i.href,allowedFormats:[],value:i.text,onChange:e=>{d({text:e})},style:{backgroundColor:i.bg_Color,borderColor:i.border_Color,borderWidth:i.border_Width,color:i.text_Color}})))},save:t=>{let{attributes:r}=t;return(0,e.createElement)("div",o.useBlockProps.save({className:"header-special-button"}),(0,e.createElement)("a",{href:r.href,style:{backgroundColor:r.bg_Color,borderColor:r.border_Color,borderWidth:r.border_Width,color:r.text_Color}},(0,e.createElement)(o.RichText.Content,{value:r.text})))}})}();