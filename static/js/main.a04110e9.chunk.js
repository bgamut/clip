(this.webpackJsonpclip=this.webpackJsonpclip||[]).push([[0],{44:function(A,e,t){},64:function(A,e,t){},65:function(A,e,t){},81:function(A,e,t){"use strict";t.r(e);var n=t(86),c=t(1),i=(t.p,t(64),t(35)),a=t(0),r=t.n(a),o=(t(65),t(85)),g=t(9),s=t(82),C=t(83),j=t(84),B=(t(66),t(3)),l=function(){var A=r.a.useState(!1),e=Object(i.a)(A,2),t=e[0],n=e[1],l=r.a.useState(!1),d=Object(i.a)(l,2),I=d[0],b=d[1],E=r.a.useState(!1),x=Object(i.a)(E,2),h=x[0],Q=x[1],O=function(){var A=window.scrollY;n(A>200)},p=function(){b(!I)},u=function(){Q(!h)};Object(a.useEffect)((function(){window.addEventListener("scroll",O)}));var v=["navbar"];return t&&v.push("scrolled"),Object(c.jsxs)("header",{className:v.join(" "),children:[Object(c.jsx)(o.a,{animationType:"fade",transparent:!1,visible:h,onDismiss:function(){console.log("user modal has been closed")},children:Object(c.jsx)(g.a,{style:{marginTop:22},children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(s.a,{children:"cart Info"}),Object(c.jsx)(C.a,{onPress:function(){u()},children:Object(c.jsx)(s.a,{children:"exit"})})]})})}),Object(c.jsx)(o.a,{animationType:"fade",transparent:!1,visible:I,onDismiss:function(){console.log("user modal has been closed")},children:Object(c.jsx)(g.a,{style:{marginTop:22},children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(s.a,{children:"user Info"}),Object(c.jsx)(C.a,{onPress:function(){p()},children:Object(c.jsx)(s.a,{children:"exit"})})]})})}),Object(c.jsxs)("div",{className:"headerContainer",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("a",{href:"/clip",children:Object(c.jsx)("img",{src:"data:image/png;base64,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aBHgjxAXHtXKlDUQ/yw2nQgQIDCHQKsAf6xeiIzZB9zHuLsqAQIEugm0DnCv1LuV8tuFhHd/c1ckQIBAd4EeAS7E+5T1CG7h3cfaVQgQIDBcoFeAC/G2pRbcbX2NToAAgXACPQP8EeLCpu424FnX02gECBCYQqB3gD9QhE759vDKvNzQCAQIEJhWYFSAO42XbRkfgMr89CZAgMD0AiX/HnitxT/CyL+WdS0quK+NtCBAgMAWAhEC/Pm1uiD/fusJ7i1uR4skQIBAukCkABfkgjt952pJgACBzQUiBrgg9/e5N78tLZ8AAQLXApEDfMcg96r8es9qQYAAAQJfBWYI8OcgP/7/St+TC223IgECBAjcFpgpwM+LO4fejGEutG9vVR0IECBA4LMgXEUmYqAL7FV2l3UQIEAgiMAuwdIz1HcxDbKFTYMAAQJ7Cgib/9f9KuRZ7XmPWDUBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIFAj8F9gnxlm9Q+6YAAAAAElFTkSuQmCC",alt:"Logo",title:"Logo"})})}),Object(c.jsx)(j.a,{style:{position:"fixed",height:50,width:220,top:44,left:"187pt",backgroundColor:"transparent",zIndex:101},activeOpacity:.5,children:Object(c.jsx)("a",{style:{textDecorationLine:"none"},href:"/category",children:Object(c.jsx)(s.a,{selectable:!1,style:{fontSize:"25pt",fontWeight:"700",textDecorationLine:"none",color:"black",textAlign:"center",alignItems:"center",justifyContent:"center",flexDirection:"row",margin:11,pointerEvents:"none"},children:"\uc790\uc7ac\uce74\ud14c\uace0\ub9ac"})})}),Object(c.jsx)(j.a,{style:{position:"fixed",height:50,width:170,top:44,left:"349pt",backgroundColor:"transparent",zIndex:101},activeOpacity:.5,children:Object(c.jsx)("a",{style:{textDecorationLine:"none"},href:"/constructionpart",children:Object(c.jsx)(s.a,{selectable:!1,style:{fontSize:"25pt",fontWeight:"700",textDecorationLine:"none",color:"black",textAlign:"center",alignItems:"center",justifyContent:"center",flexDirection:"row",margin:11,padding:"auto",pointerEvents:"none"},children:"\uc0ac\uacf5\ubd80\uc704"})})}),Object(c.jsx)(j.a,{style:{position:"fixed",height:50,width:140,top:44,left:"478pt",backgroundColor:"transparent",zIndex:101},activeOpacity:.5,children:Object(c.jsx)("a",{style:{textDecorationLine:"none"},href:"/brands",children:Object(c.jsx)(s.a,{selectable:!1,style:{fontSize:"25pt",fontWeight:"700",textDecorationLine:"none",color:"black",textAlign:"center",alignItems:"center",justifyContent:"center",flexDirection:"row",margin:11,padding:"auto",pointerEvents:"none"},children:"\ube0c\ub79c\ub4dc"})})}),Object(c.jsx)(j.a,{style:{position:"fixed",height:47,width:47,top:"29pt",right:"173pt",backgroundColor:"transparent",zIndex:101},children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABxVJREFUWAnFWW1I1VcYf+71pdg0y5crhaWm+zBYzDampvtg0MuK4WRgpDRGxAolQrdw0RZji0W0ZtGYUtQ3ty/CKIlpGvalVjaGjhYrtGZphlfTZFr5lvs9B8/p3P/9v91btgf+nOc8b+f3f+5z3v7XQ89JMzMzUXfv3s2emJh4HaF8Ho/Hxy2eOPBDT58+9aPtR98P2z8zMzM70J9BP2zyhOPp9/tjRkZGNmLwIvhvBJg4t3FmX6AB7Znly5e3oJ1w6yvtQgINcNG3b98uR/a+RIAEGSTcFoC7vV7vvvT09J/Au86+K9AA6wHYErTf4kkLF6SNX0dERMTnyHyzjY1SOYIeGBiIRSnUAWyh8pojBln/EcArkPUpuyFsQXd3d6dPTU01APAbdkFepA6AW+fNm1e8dOnSIau4lqC7urryAfY0HBOtnOdKDuBdeDZmZGR0mo1hCvrWrVuvAXAbnkVmTkYZJiZdu3aNsPQRVhah9vl8tGzZMlqxYgXhZze6OPYZODKeY5bxSKM3AMcBRAPkjoB7enroxIkT1NzcTEND5r9mfHw8rVu3jrZv304AYBzOso+EZY6Pj9ejXY8XCKjxgEzDIAKgz6J9zzIaFNhI6PDhw1RXV0eTk5N2pkoXFRVFW7Zsod27d1N0dLSSOzE8OVEmO3W7ANCo450A/INuYOQHBwepvLyc2tvbjSpX/ZUrV1JtbS0lJLhf5rEcrteXQwV6dmnrAmjegk1pdHSUiouLCS8XoI+MjKTc3FzKz8+nxYsXC939+/fp0qVLdOXKFcIKFGCPrZzq6+spJiYmQG7T6YDPWygTsQEp0ADyDQDvs3EUdXnhwoUAkw0bNlBVVRWlpKQEyGWnt7eXDh06RI2NjVIk2tWrV4v5ECC06SDbHyHbdWwipjV2u2QA/tTGRwxqBLxnzx46duyYJWCOxy/DNmyrE8cyvoiuN/JYHPYDo5gMAjQ6pTB61Wgo+/zz8sTTaceOHbRt2zZdZMuzLa8gOnFMY+noep0HxjQkdy3LBGi8xQe6gZG/evWqWIOlPDU1lSoqKmTXdVtZWUnsK4nXdY7tlgBc4PSi5hJQ4O/aOba0tASoOcs8+UIl9mFfnYyxdZ0JXwjgXu+TJ0/eBxNhYqBE+vKGF6Q1a9YoXagM+3IMSXpsKbNqgTMZC8abXjA5VkZSLrdm7icnJ9OiRY6bpXQNatmXY0jSY0uZXYvNJsuLt15iZ8S6hw8fKpOFCxcqPlxGj6HHdhnPxxPREfRzDhKEZXh4WMn02Epow2DR8HF5OILmE5uk/v5+0geVcrct++olocd2EwPlITKd5GTM5wVJeEk6f/687Ibcsi/HkKTHljK7Fr7xXNPPfisL67VrxZqutMePH3e9KSgnMLyRsK9Oxti6zoIf4fLos1AqcXZ2tjjQS8GdO3fo6NGjsuu6PXLkCLGvJL4kcOwQyc+ZdgTNmwKfg3XijJ06dUoX2fJsyxcGnThmqJsUkuzn1cMRNA/Epzk+mel08OBB2rVrF/FJzopYxzZsq1NBQYGIqctc8v5IZLpDnxh2jtXV1UHnaT6p8Va8atUqysvLE+dpxCR5nr58+bJp/fPthW9AodxiGBti/+1BJlIeP37cYwdW1z3vzUWPlZOTI24xsbGxutiSB+ARXL2SvDjv9qLzh6WlQZGYmCjuhlu3biW+97klsxt5W1sblZSUEK/9LulXYJ0UR1M4nHbpJMz4J927dy+dO3eONm/eTHzjtiLWsQ3bGucE+9y8eZM2bdpEuFBbhVBylLHAKY5bONdm4Lp+A9rQz5twwtbq6rvHo0ePqLS0lK5fv66ASCYuLo5OnjxJWVlZUmRsH8AmDTvoqDojdnZ21sCqzGj5ovu4QIvJfO/evaDQ/F2ktbU1SM4ClFcl6llsDrI8CBfHr6EbNfV4gcKkpCSR0QULFgRFtbp6oY67canlpApSoCHk2fD9rHxOG/6EUFNTEzSReVKaEUB/gWdC6lR5sKCvr++VsbGxi2CfnZCk5Ry0TU1NdODAATEnGHBZWVnQdz+AbUBZFKFVp6wA0IwL1xn+4PY7Zuqz68UcAHYTEkD/wuTLQ0n9q9ur8pBC/HS80XyIZ1zK/qd2EOeSQiNgxhIEmoUA/hve8mOwqo5Y/rIIYw/jKUpLS/vHbMyg8tCNUCp56P/ykkvlBpa3QtSx6Qd1xmeaaQmcMw7+HTztUjaXLbLbBMC5doB5fNtMS4Czq0oV+p/hcf2pU/o7tQDLfx/sB9ha8NOO9k4Gup4/VE5PT38F2Sd4wtry9XjgxwCyGivEd2YTzmCruq4yraxnGT6r4CzMO0ER6v1to96uz5mEz0WUwRnwP89uanYuQbqwQOtR+DyOwxZ/Y+OTzhK0SwCGW/4MNQCeb0Z96PeBb5s/f/5ZHIcf6DFC5f8DufzK9I2lLioAAAAASUVORK5CYII="})}),Object(c.jsx)(j.a,{style:{position:"fixed",height:47,width:47,top:"29pt",right:"103pt",backgroundColor:"transparent",zIndex:101},onPress:function(){u()},children:Object(c.jsx)("img",{src:"data:image/png;base64,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"})}),Object(c.jsx)(j.a,{style:{position:"fixed",height:47,width:47,top:"29pt",right:"33pt",backgroundColor:"transparent",zIndex:101},onPress:function(){p()},children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABUdJREFUWAnVmV9IZFUYwM+MNkptjKXOwqDivx5CMStqo8K3KAdxJQzcCnrqJVbIonyoiNh6kCgIqR56EqwV0mhFNAp6kCXch8pEKfAvJkM76qaU+Sf/9Psu3svM3Xvv3DnNpB04nH/fd77f/eac75x7J6D+ZTo6OrpleXn5wb29vbuZKhIIBCJSksPUbxweHiYor9NOIPtTbW3tJO0j2topoKOZSCTObG5uxjDehn4MmLDfeY4fYJjySnV19TeUe351TbmMoIELLSwsvID3XmeCYnMS3RLgpWAw+EZVVdWn1H173xc0sAFgL1C+Q67UhfTQm8zLy+vG8197yFhDaaFXV1dvZyn0A9tqaeWogtc/BPxFvL7vZcITemlpqWp/f38Y4HqvSbI5BvC3BQUFT5WXl99wm9cVem5u7hFgv0SxxE05V/2Az5FjNTU1s042HKHn5+fvAvga+Q4npf+iT8Dx+DknjwftAACHiQ6yJE4MWJiwX7u7u/s5Zb6dMcXTCOQBPUL5hF0wXZsHVaOjo2pkZERNTU2pjY0NVVRUpBoaGlRLS4uKxWKKjZZumpvGZXOyTC4mD6RAs44vAtybLOCnvrKyojo7O9X09LSreH19vert7VVlZWWuMm4DhMPHk8OhBX0c2uaAliPYdxLg9vZ2tb6+nlanuLhYDQ4O6oBPcvzfxzo3DiDr9yIWv5IpsCwJ8bAfYHkikRN50cswNS4uLj5j6hjQnHZnAX7J7PRbyhr2WhJO84i86GWaeNBLMIZEz4Cm8TT12zKdSDadTtLRg7ES5z4m9gxonuK8jnGJEjpJVw9wgzPIRipmgT+qY1zCmk7S1cNWK+DB4M7OTguVPB3jEod1kq4enGcJy/cEqZzTMSw6cnDoJF09scVh0xhkaUR1DIuOnHQ6SVfv2FZENqI2tBzNctJlkkRe9HQTQSMiy0MbWu4ScjTLSecniZzI69xBzPnRNTxdanbolHKXkKM5ncdlXPMIT8HCyXcG2I2/ya5MGdFoyNGci1ueHYU9eDkwOzv7AwP32gdPaxvoDyR6xE8roBMXqyIh0eN/BQ1vIh9PT0Lv9FCOfWNjY2pgYEDNzMworrOOMn46w+GwqqurUx0dHaq5udmPiiED788B7h5l29vbv6bTWltbU93d3Wp8fDydaMbjTU1NqqenR5WUeL/4A7zJq1dpkJC1QuN7L0sSGbq6unICLHbFETK/2EmTRmH927iaIijfN1xTX1+fmpiYcB3PxoDML3a8EsvY4DSgQ6HQZYRdP0UNDQ15zZW1sTR21tkHxiuPAV1RUTGP5U/crPN+5jaU1X4vOxzfb0cikT/FoLk8FK/pb9E2Ou0kfDC3d+Wk7WaHdbzEJ4SPTKPW1xs6r3M6vsfAm+agWfb395vVEymBfo1sec767iE08Xj81q2tratUT82xDuwwYa6N0jpMrOUh0NFo9C8Gz5PlP5ITT3BMs/meTQYWqBRo6eBLjhw0T5J3pX2CaS0/P7+1tLT0DzvDTdAiAPh3PN1zVK11ZFfMZRvbv5PbKisrHcNWypq2g3DXfpi+L7Jx37bP7dH+hfDW6vZBXfQcPW1OKB6n/gD5R7MvlyXe/Qrgh7yAxb6np03A46jyKu2XyWfM/myVwCaY6xKwH1M/SDevL2hzEvlQeXBwIHH8ebIV481xjXILyPeJEO86bTi3+TKCNifhb+UaTq8LtNtY7/eb/X5K8SQ6V1kGV6h/JoeaH71kGS3o5AnkPs5/I/KNrZH+KGUUGCnlP5tV6vJmFKcdp36tsLBwhOtw+i/wyUZs9X8A6tchiBqjam8AAAAASUVORK5CYII=",style:{height:"47pt"}})}),Object(c.jsxs)(B.c,{children:[Object(c.jsx)(B.a,{path:"/"}),Object(c.jsx)(B.a,{path:"/category",children:Object(c.jsx)(s.a,{children:"category"})})]})]})]})},d=t.p+"static/media/introImage.a1461657.png",I=(t.p,t.p,t.p,t(44),function(){var A=Object(c.jsx)("div",{className:"box",children:Object(c.jsx)("h2",{children:"temporary filler"})});return Object(c.jsxs)("main",{className:"content",children:[A,A,A]})}),b=function(){var A=Object(c.jsx)("div",{className:"introImage",children:Object(c.jsx)("div",{id:"introImageDiv",children:Object(c.jsx)("img",{id:"introImage",src:d,alt:"Logo",title:"Logo"})})});return Object(c.jsx)("div",{className:"content",children:A})};var E=function(){return Object(c.jsx)("div",{className:"headerFiller",style:{height:"100pt"}})};var x=function(){return Object(c.jsxs)("div",{className:"Home",children:[Object(c.jsx)(l,{}),Object(c.jsx)(E,{}),Object(c.jsx)(b,{}),Object(c.jsx)(I,{})]})};var h=function(){return Object(c.jsxs)("div",{className:"Category",children:[Object(c.jsx)(l,{}),Object(c.jsx)(E,{}),Object(c.jsx)(s.a,{children:"Category"}),Object(c.jsx)(I,{})]})};var Q=function(){return Object(c.jsxs)("div",{className:"ConstructionPart",children:[Object(c.jsx)(l,{}),Object(c.jsx)(E,{}),Object(c.jsx)(s.a,{children:"ConstructionPart"}),Object(c.jsx)(I,{})]})};var O=function(){return Object(c.jsxs)("div",{className:"Brands",children:[Object(c.jsx)(l,{}),Object(c.jsx)(E,{}),Object(c.jsx)(s.a,{children:"Brands"}),Object(c.jsx)(I,{})]})},p=t(38);var u=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p.a,{children:Object(c.jsxs)(B.c,{children:[Object(c.jsx)(B.a,{exact:!0,path:"/clip",component:x}),Object(c.jsx)(B.a,{exact:!0,path:"/category",component:h}),Object(c.jsx)(B.a,{exact:!0,path:"/constructionPart",component:Q}),Object(c.jsx)(B.a,{exact:!0,path:"/brands",component:O})]})})})};t.p;n.a.registerComponent("App",(function(){return u})),n.a.runApplication("App",{rootTag:document.getElementById("root")})}},[[81,1,2]]]);
//# sourceMappingURL=main.a04110e9.chunk.js.map