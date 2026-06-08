const lines = [
  "> 初始化候选人档案...",
  "> 专业：电气工程及其自动化（电力系统方向）",
  "> 能力：电力仿真 / 短路电流计算 / 电气制图能力 / 项目管理 / 器件开发",
  "> 行业：供配电 / 储能安全 / 数据中心 / 充电网络",
  "> 证书：华为硬件可信认证专业级（电源技术）/ 二级建造师（机电）",
  "> 学历：广东工业大学全日制本科",
  "> 状态：准备接下一个能源系统挑战 ⚡"
];

const target = document.getElementById("typewriter");
let lineIndex = 0;
let charIndex = 0;

function type() {
  if (!target) return;
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      target.textContent += lines[lineIndex][charIndex];
      charIndex++;
      setTimeout(type, 28);
    } else {
      target.textContent += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 220);
    }
  }
}
type();

const revealEls = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.86;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("active");
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
