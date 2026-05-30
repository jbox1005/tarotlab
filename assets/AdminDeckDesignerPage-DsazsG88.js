import{u as Z,w as q,L as V,r as j,l as e,M as X,N as ee,O as F,Q as te,q as se,g as oe}from"./index-CQZqUZuw.js";import{J as Y}from"./jszip.min-DiUJnVkK.js";const $={cardWidth:815,cardHeight:1358,originalWidth:1086,originalHeight:1810,gutter:24,background:{r:245,g:240,b:230},sheets:[{id:"major-1",title:"Major Arcana 0–10",cards:Array.from({length:11},(o,t)=>`major-${t}`),cols:4,rows:3},{id:"major-2",title:"Major Arcana 11–21",cards:Array.from({length:11},(o,t)=>`major-${t+11}`),cols:4,rows:3},{id:"wands",title:"Wands (Ace–King)",cards:Array.from({length:14},(o,t)=>`wands-${t+1}`),cols:7,rows:2},{id:"cups",title:"Cups (Ace–King)",cards:Array.from({length:14},(o,t)=>`cups-${t+1}`),cols:7,rows:2},{id:"swords",title:"Swords (Ace–King)",cards:Array.from({length:14},(o,t)=>`swords-${t+1}`),cols:7,rows:2},{id:"pentacles",title:"Pentacles (Ace–King)",cards:Array.from({length:14},(o,t)=>`pentacles-${t+1}`),cols:7,rows:2}]};function ae(o){const{cardWidth:t,cardHeight:r,gutter:a}=$;return{width:o.cols*t+(o.cols+1)*a,height:o.rows*r+(o.rows+1)*a}}const re=.92;function G(o){return new Promise((t,r)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=i=>r(new Error(`이미지 로드 실패: ${o} (${i.type})`)),a.src=o})}function J(o,t="image/jpeg",r=re){return new Promise((a,i)=>{o.toBlob(l=>l?a(l):i(new Error("canvas.toBlob 실패")),t,r)})}function ne(o){return`/tarotlab/images/cards/${o}.webp`}async function ie({getCardUrl:o=ne,onProgress:t}={}){const{cardWidth:r,cardHeight:a,gutter:i,background:l,sheets:y}=$,b=`rgb(${l.r}, ${l.g}, ${l.b})`,A=y.reduce((n,g)=>n+g.cards.length,0);let x=0;const v=[];for(const n of y){const{width:g,height:d}=ae(n),f=document.createElement("canvas");f.width=g,f.height=d;const u=f.getContext("2d");u.fillStyle=b,u.fillRect(0,0,g,d),u.imageSmoothingQuality="high";for(let h=0;h<n.cards.length;h++){const w=n.cards[h],p=h%n.cols,z=Math.floor(h/n.cols),k=i+p*(r+i),D=i+z*(a+i);try{const T=await G(o(w));u.drawImage(T,k,D,r,a)}catch(T){u.fillStyle="rgba(200, 0, 0, 0.15)",u.fillRect(k,D,r,a),u.fillStyle=b,console.warn("compose: 카드 로드 실패",w,T)}x+=1,t==null||t(x,A,n.id)}const R=await J(f);v.push({id:n.id,title:n.title,blob:R,width:g,height:d})}return v}async function ce(o){const t=new Y;for(const r of o)t.file(`${r.id}.jpg`,r.blob);return t.file("manifest.json",JSON.stringify($,null,2)),t.file("README.txt",ue),t.generateAsync({type:"blob"})}async function le(o,{onProgress:t}={}){const{cardWidth:r,cardHeight:a,gutter:i,originalWidth:l,originalHeight:y,sheets:b}=$,A=b.reduce((n,g)=>n+g.cards.length,0);let x=0;const v=[];for(const n of b){const g=o[n.id];if(!g)throw new Error(`시트 누락: ${n.id} — 모든 6장이 필요합니다`);const d=URL.createObjectURL(g);let f;try{f=await G(d)}finally{URL.revokeObjectURL(d)}const u=n.cols*r+(n.cols+1)*i,R=n.rows*a+(n.rows+1)*i,h=f.naturalWidth/u,w=f.naturalHeight/R;for(let p=0;p<n.cards.length;p++){const z=n.cards[p],k=p%n.cols,D=Math.floor(p/n.cols),T=(i+k*(r+i))*h,M=(i+D*(a+i))*w,L=r*h,O=a*w,C=document.createElement("canvas");C.width=l,C.height=y;const I=C.getContext("2d");I.imageSmoothingQuality="high",I.drawImage(f,T,M,L,O,0,0,l,y);const P=await J(C);v.push({name:z,blob:P,width:l,height:y}),x+=1,t==null||t(x,A,n.id)}}return v}async function de(o,t){const r=new Y,a=r.folder(t);for(const i of o)a.file(`${i.name}.jpg`,i.blob);return a.file("README.txt",`이 폴더 전체를 public/images/cards/${t}/ 에 그대로 넣으면 됩니다.
파일명은 카드 ID와 일치하므로 변경하지 마세요.
`),r.generateAsync({type:"blob"})}const ue=`# 타로랩 카드 덱 시트

이 zip 안에는 RWS 78장을 6장의 시트로 합성한 이미지가 들어 있습니다.
이 시트들을 AI 이미지 변환 도구(Midjourney, DALL-E, Stable Diffusion, ChatGPT image edit 등)에 보내
같은 그리드 형식을 유지한 채 새로운 스타일로 변환하는 용도입니다.

## 시트 구성
- major-1.jpg : 메이저 아르카나 0–10 (4×3 그리드, 11장 + 빈칸 1)
- major-2.jpg : 메이저 아르카나 11–21 (4×3 그리드, 11장 + 빈칸 1)
- wands.jpg     : Wands Ace–King (7×2 그리드, 14장)
- cups.jpg      : Cups Ace–King (7×2 그리드, 14장)
- swords.jpg    : Swords Ace–King (7×2 그리드, 14장)
- pentacles.jpg : Pentacles Ace–King (7×2 그리드, 14장)

## 카드별 픽셀 크기 (원본 75%)
- 너비 815 px, 높이 1358 px
- 카드 사이 여백 24 px, 양피지 톤 배경 (#F5F0E6)

## 변환 후 사용
변환된 6장의 시트를 같은 파일명으로 받아서 관리자 페이지 → 카드 덱 디자이너 →
"분할" 영역에 업로드하면 78장 카드로 자동 분할됩니다.

## manifest.json
시트의 그리드 메타데이터입니다. 분할 스크립트가 사용하므로 함께 보관하세요.
`;function U(o,t){const r=URL.createObjectURL(o),a=document.createElement("a");a.href=r,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(r),1500)}const H=`# Tarot Deck Style Transfer — STRICT FORMAT REQUIREMENTS

You will receive 6 sheet images of a Rider-Waite-Smith tarot deck (78 cards total). Each sheet contains multiple cards laid out in a fixed grid.

## YOUR TASK
Transform every card into a new artistic style: **{STYLE_DESCRIPTION_HERE}**.

Preserve each card's symbolic meaning, key elements, and composition — only the visual style should change.

## ABSOLUTE RULES — MUST FOLLOW
1. **Do NOT crop, resize, or change the aspect ratio** of the sheet. The output sheet must have the exact same dimensions and grid structure as the input.
2. **Do NOT change the grid layout.** Keep the same number of rows and columns. Major-1 and Major-2 sheets are 4 columns × 3 rows. Suit sheets (Wands/Cups/Swords/Pentacles) are 7 columns × 2 rows.
3. **Preserve gutters between cards.** There is a 24px parchment-toned background gap between every card. Do not let illustrations bleed across these gaps.
4. **Do NOT add, remove, or rearrange cards.** Each card stays in its exact position. The empty cells (the 12th cell on each major sheet) must remain empty.
5. **Maintain card boundaries clearly.** Each card is a self-contained rectangle — no element should extend outside its own card frame.
6. **Keep the same iconography.** A card showing a sun must still show a sun. A figure pose, key objects, and numerical/symbolic content must remain identifiable.

## STYLE CONSISTENCY ACROSS SHEETS
You will process 6 sheets across multiple turns. Maintain the SAME style for all sheets:
- Same color palette and treatment
- Same line quality / brush style
- Same character design language
- Same level of detail per card

For minor suits, you may bias colors toward the elemental association (Wands=warm/fire, Cups=cool/water, Swords=airy/sky, Pentacles=earthy/gold) — but the underlying style must remain identical.

## OUTPUT FORMAT
- Same image dimensions as input (or scaled proportionally)
- Same JPEG/PNG format
- Background between cards: keep the parchment tone (#F5F0E6) or a similar neutral
- Return only the modified sheet image. No commentary inside the image.

Begin with the first sheet. Confirm you understand these constraints before transforming.`,_=`# 타로 덱 스타일 변환 — 형식 준수 필수

라이더-웨이트-스미스 타로 78장이 6장의 시트 이미지로 합성되어 전달됩니다. 각 시트는 카드들이 고정된 그리드로 배치돼 있습니다.

## 작업
모든 카드를 다음 스타일로 변환하세요: **{여기에 원하는 스타일 기술}**.

각 카드의 상징적 의미, 핵심 요소, 구도는 유지하고 시각적 스타일만 변환하세요.

## 절대 규칙
1. **시트를 자르거나 크기/비율을 바꾸지 마세요.** 출력 시트는 입력과 동일한 비율·그리드 구조를 가져야 합니다.
2. **그리드 레이아웃을 변경하지 마세요.** Major-1, Major-2는 4×3 그리드, 슈트(Wands/Cups/Swords/Pentacles)는 7×2 그리드입니다.
3. **카드 사이 여백 유지.** 모든 카드 사이에 24px 의 양피지 톤 배경이 있습니다. 일러스트가 이 여백을 침범하면 안 됩니다.
4. **카드를 추가/제거/재배치하지 마세요.** 각 카드는 정확히 같은 위치에 머물러야 하며, 메이저 시트의 12번째 빈 셀은 그대로 비워둬야 합니다.
5. **카드 경계 명확히.** 각 카드는 독립된 사각형이며 어떤 요소도 자신의 프레임 밖으로 나가면 안 됩니다.
6. **상징 보존.** 태양이 그려진 카드는 여전히 태양이 있어야 합니다. 인물의 포즈, 핵심 사물, 숫자/상징 요소는 식별 가능하게 유지하세요.

## 시트 간 스타일 일관성
6장의 시트를 여러 번 작업하게 됩니다. 모든 시트에 같은 스타일을 적용하세요:
- 같은 색 팔레트와 처리
- 같은 선/붓 스타일
- 같은 캐릭터 디자인 언어
- 카드별 동일한 디테일 수준

마이너 슈트는 원소 연관(완드=불/따뜻한 색, 컵=물/차가운 색, 소드=공기/하늘색, 펜타클=흙/금색)에 따라 색조를 살짝 다르게 해도 되지만 베이스 스타일은 동일해야 합니다.

## 출력 형식
- 입력과 동일한 이미지 크기 (또는 비율 유지한 채 스케일)
- 같은 JPEG/PNG 형식
- 카드 사이 배경: 양피지 톤 (#F5F0E6) 또는 유사한 중립색 유지
- 변환된 시트 이미지만 반환. 이미지 안에 텍스트 주석 추가 금지.`;function he(){const o=Z(),t=q(),r=V(),[a,i]=j.useState(!1),[l,y]=j.useState(null),[b,A]=j.useState(null),[x,v]=j.useState("en"),[n,g]=j.useState(!1),[d,f]=j.useState(""),[u,R]=j.useState({}),[h,w]=j.useState(!1),[p,z]=j.useState(null),k=j.useRef({}),D=async()=>{i(!0),y({cur:0,total:78,label:"시작"});try{const s="/tarotlab/",c=r==="rws-classic"?"":`${r}/`,S=await ie({getCardUrl:E=>`${s}images/cards/${c}${E}.webp`,onProgress:(E,W,Q)=>y({cur:E,total:W,label:Q})});A(S)}catch(s){alert(`합성 실패: ${s.message}`),console.error(s)}finally{i(!1)}},T=async()=>{if(!b)return;const s=await ce(b);U(s,"tarotlab-deck-sheets.zip")},M=s=>{U(s.blob,`${s.id}.jpg`)},L=async()=>{const s=x==="en"?H:_;try{await navigator.clipboard.writeText(s),g(!0),setTimeout(()=>g(!1),1500)}catch(c){alert("클립보드 복사 실패: "+c.message)}},O=(s,c)=>{c&&R(m=>({...m,[s]:c}))},C=$.sheets.every(s=>u[s.id]),I=s=>s.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,""),P=async()=>{const s=I(d);if(!s){alert("덱 ID 를 입력해 주세요 (예: rws-cute, rws-noir).");return}if(!C){alert("6장 시트를 모두 업로드해 주세요.");return}w(!0),z({cur:0,total:78,label:"시작"});try{const c=await le(u,{onProgress:(S,E,W)=>z({cur:S,total:E,label:W})}),m=await de(c,s);U(m,`cards-${s}.zip`)}catch(c){alert(`분할 실패: ${c.message}`),console.error(c)}finally{w(!1)}};return e.jsxs("div",{className:"page",style:{padding:20,maxWidth:880,margin:"0 auto"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",style:{margin:0},children:"카드 덱 디자이너"}),e.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:4},children:"관리자 전용 · DEV 모드에서만 노출"})]}),e.jsxs("div",{style:{display:"flex",gap:6},children:[e.jsx("button",{"data-no-click-sound":!0,className:"tool-btn",onClick:()=>o("/admin"),children:"관리"}),e.jsx("button",{"data-no-click-sound":!0,className:"tool-btn",onClick:()=>o("/"),children:"홈"})]})]}),e.jsxs(N,{title:"활성 카드 덱",desc:"앱 전체에서 사용할 카드 앞면 디자인을 고릅니다. 새 덱을 추가하면 (public/images/cards/<deckId>/ + data/decks.js 등록) 여기에 자동 노출됩니다.",children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:X().map(s=>{const c=s.id===r,m=oe(1),S=ee(m,s.id);return e.jsxs("button",{"data-no-click-sound":!0,onClick:()=>se({cardDeck:s.id}),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:10,background:"var(--bg)",border:`2px solid ${c?"var(--gold)":"var(--border)"}`,borderRadius:8,cursor:"pointer",textAlign:"center",transition:"border-color 0.15s, transform 0.1s"},children:[e.jsx("img",{src:S,alt:F(s,t),style:{width:"100%",maxWidth:120,aspectRatio:"1086/1810",objectFit:"cover",borderRadius:5,border:"1px solid var(--border)"},onError:E=>{E.currentTarget.style.opacity=.3}}),e.jsxs("div",{style:{fontSize:13,fontWeight:600,marginTop:4},children:[F(s,t),c&&e.jsx("span",{style:{marginLeft:6,color:"var(--gold)"},children:"✓"})]}),e.jsx("div",{style:{fontSize:11,color:"var(--text-muted)",lineHeight:1.35},children:te(s,t)}),e.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontFamily:"monospace"},children:s.id})]},s.id)})}),e.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:10},children:["현재 활성: ",e.jsx("code",{children:r})," · 변경 즉시 앱 전체 카드 이미지에 반영됩니다."]})]}),e.jsxs(N,{title:"1. 시트 합성 & 다운로드",desc:`현재 활성 덱(${r})의 78장을 6장의 시트로 합성합니다. 다른 덱으로 합성하려면 위에서 활성 덱을 먼저 바꾸세요.`,children:[!b&&e.jsx("button",{"data-no-click-sound":!0,className:"btn",onClick:D,disabled:a,children:a?"합성 중...":"78장을 6시트로 합성"}),a&&l&&e.jsx(B,{cur:l.cur,total:l.total,label:l.label}),b&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:10,marginTop:10},children:b.map(s=>e.jsxs("div",{style:K,children:[e.jsx("div",{style:{fontSize:13,fontWeight:600},children:s.id}),e.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)"},children:[s.width,"×",s.height," · ",(s.blob.size/1024/1024).toFixed(1)," MB"]}),e.jsx("button",{"data-no-click-sound":!0,className:"tool-btn",style:{marginTop:6},onClick:()=>M(s),children:"개별 다운로드"})]},s.id))}),e.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[e.jsx("button",{"data-no-click-sound":!0,className:"btn",onClick:T,children:"↓ 전체 zip 다운로드 (manifest 포함)"}),e.jsx("button",{"data-no-click-sound":!0,className:"tool-btn",onClick:()=>{A(null),y(null)},children:"다시 합성"})]})]})]}),e.jsxs(N,{title:"2. AI 프롬프트 템플릿",desc:"이 텍스트를 변환을 맡길 AI(Midjourney·DALL-E·SD·ChatGPT image edit 등) 첫 메시지에 붙여 넣은 후, 시트 이미지를 함께 첨부하세요. {여기에 원하는 스타일 기술} 부분을 본인이 원하는 스타일로 교체하세요 (예: cute chibi watercolor / dark gothic ink / cyberpunk neon).",children:[e.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[e.jsx("button",{"data-no-click-sound":!0,className:x==="en"?"btn":"tool-btn",onClick:()=>v("en"),children:"English"}),e.jsx("button",{"data-no-click-sound":!0,className:x==="ko"?"btn":"tool-btn",onClick:()=>v("ko"),children:"한국어"}),e.jsx("div",{style:{flex:1}}),e.jsx("button",{"data-no-click-sound":!0,className:"btn",onClick:L,children:n?"✓ 복사됨":"클립보드 복사"})]}),e.jsx("textarea",{readOnly:!0,value:x==="en"?H:_,style:{width:"100%",minHeight:280,padding:12,fontSize:12,lineHeight:1.55,fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",background:"var(--bg)",color:"var(--text)",border:"1px solid var(--border)",borderRadius:8,resize:"vertical"}})]}),e.jsxs(N,{title:"3. AI 결과 업로드 → 78장 자동 분할",desc:"AI 가 변환한 6장의 시트를 같은 파일명으로 받았다면, 아래 영역에 업로드하세요. 78장이 분할되어 zip 으로 다운로드됩니다.",children:[e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx("label",{style:{fontSize:13,fontWeight:600},children:"덱 ID:"}),e.jsx("input",{type:"text",value:d,onChange:s=>f(s.target.value),placeholder:"예: rws-cute, rws-noir",style:{padding:"6px 10px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",fontSize:13,minWidth:240}}),e.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:d&&`→ public/images/cards/${I(d)}/`})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:$.sheets.map(s=>{const c=u[s.id];return e.jsxs("div",{style:{...K,borderColor:c?"var(--accent)":"var(--border)"},children:[e.jsxs("div",{style:{fontSize:13,fontWeight:600},children:[s.id,".jpg"]}),e.jsx("div",{style:{fontSize:11,color:"var(--text-muted)"},children:s.title}),e.jsx("input",{ref:m=>k.current[s.id]=m,type:"file",accept:"image/*",style:{display:"none"},onChange:m=>{var S;return O(s.id,(S=m.target.files)==null?void 0:S[0])}}),e.jsx("button",{"data-no-click-sound":!0,className:"tool-btn",style:{marginTop:6,fontSize:12},onClick:()=>{var m;return(m=k.current[s.id])==null?void 0:m.click()},children:c?`✓ ${c.name.slice(0,24)}${c.name.length>24?"…":""}`:"파일 선택"})]},s.id)})}),h&&p&&e.jsx(B,{cur:p.cur,total:p.total,label:p.label}),e.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[e.jsx("button",{"data-no-click-sound":!0,className:"btn",onClick:P,disabled:!C||!d.trim()||h,children:h?"분할 중...":"78장 분할 → zip 다운로드"}),e.jsx("button",{"data-no-click-sound":!0,className:"tool-btn",onClick:()=>R({}),disabled:Object.keys(u).length===0,children:"업로드 초기화"})]}),e.jsxs("div",{style:{marginTop:10,padding:10,fontSize:12,color:"var(--text-muted)",background:"var(--bg)",border:"1px dashed var(--border)",borderRadius:6},children:[e.jsx("strong",{children:"분할 결과 zip 사용법:"})," 압축을 풀면 ",e.jsxs("code",{children:[d?I(d):"<deckId>","/"]})," 폴더 안에 78장 jpg 가 들어 있습니다. 이 폴더 전체를 ",e.jsx("code",{children:"public/images/cards/"})," 아래로 옮기면 새 덱이 코드에서 사용 가능합니다 (현재는 cards.js 가 단일 덱 하드코딩이므로, 향후 멀티 덱 작업 시 활용)."]})]})]})}function N({title:o,desc:t,children:r}){return e.jsxs("section",{style:{marginBottom:16,padding:16,background:"var(--bg-raised, rgba(255,255,255,0.04))",border:"1px solid var(--border, rgba(255,255,255,0.1))",borderRadius:12},children:[e.jsx("h2",{style:{margin:"0 0 4px",fontSize:16},children:o}),t&&e.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",lineHeight:1.5,marginBottom:12},children:t}),r]})}function B({cur:o,total:t,label:r}){const a=t?Math.round(o/t*100):0;return e.jsxs("div",{style:{marginTop:10},children:[e.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4},children:[r," · ",o," / ",t]}),e.jsx("div",{style:{height:6,background:"var(--border)",borderRadius:3,overflow:"hidden"},children:e.jsx("div",{style:{width:`${a}%`,height:"100%",background:"var(--accent)",transition:"width 0.15s"}})})]})}const K={display:"flex",flexDirection:"column",padding:10,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:8,minHeight:0};export{he as default};
