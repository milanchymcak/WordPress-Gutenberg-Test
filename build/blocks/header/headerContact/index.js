!function(){"use strict";var e=window.wp.element,t=window.wp.blocks,a=window.wp.i18n,l=window.wp.components,o=window.wp.blockEditor;function n(t){const[a,o]=(0,e.useState)(void 0===t.default?"#fff":t.default),n=(Math.random()+1).toString(36).substring(7);return(0,e.createElement)(l.BaseControl,{label:t.label,id:n,help:t.help},(0,e.createElement)(l.ColorPicker,{color:a,id:n,onChange:e=>{t.setAttributes({[t.target]:e}),o(e.toString())},copyFormat:"hex"}))}var r=JSON.parse('{"u2":"mchymcak/headercontact"}'),c=JSON.parse('{"text_Color":{"type":"string","selector":"div","attribute":"color","default":"#AF0B2B"},"title":{"type":"string","selector":"div","attribute":"value","default":"Konzultační linka"},"phone":{"type":"string","selector":"div","attribute":"value","default":"+420 376 709 850"},"opening_hours":{"type":"string","selector":"div","attribute":"value","default":"Po-Pá 07:00-15:30"}}');(0,t.registerBlockType)(r.u2,{attributes:c,edit:t=>{const{attributes:r,setAttributes:c}=t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(l.PanelBody,{initialOpen:!1,title:(0,a.__)("Nastavení Barev","text-domain-example")},(0,e.createElement)(n,{attributes:r,setAttributes:c,label:(0,a.__)("Barva Tel. Čísla","text-domain-example"),target:"text_Color",default:r.text_Color}))),(0,e.createElement)(o.BlockControls,{group:"block"}),(0,e.createElement)("div",(0,o.useBlockProps)({className:"header-contact"}),(0,e.createElement)(o.RichText,{tagName:"div",allowedFormats:[],value:r.title,className:"header-contact-title",onChange:e=>{c({title:e})}}),(0,e.createElement)(o.RichText,{tagName:"div",allowedFormats:[],value:r.phone,className:"header-contact-phone",onChange:e=>{c({phone:e})},style:{color:r.text_Color}}),(0,e.createElement)(o.RichText,{tagName:"div",allowedFormats:[],value:r.opening_hours,className:"header-contact-title",onChange:e=>{c({opening_hours:e})}})))},save:t=>{let{attributes:a}=t;return(0,e.createElement)("div",o.useBlockProps.save({className:"header-contact"}),(0,e.createElement)(o.RichText.Content,{tagName:"div",className:"header-contact-title",value:a.title}),(0,e.createElement)("a",{href:"tel:"+a.phone.replace(/ /g,""),className:"header-contact-phone",style:{color:a.text_Color}},(0,e.createElement)(o.RichText.Content,{value:a.phone})),(0,e.createElement)(o.RichText.Content,{tagName:"div",className:"header-contact-title",value:a.opening_hours}))}})}();