//정의-기본 정보
const year = document.getElementById("year");
const multiMajor = document.getElementById("multi-major")

//정의-교양 영역
const libForm = document.getElementById("lib-form");
const korSt = document.getElementById("kor-st");
const korCrts = document.getElementById("kor-credit");
const engSt = document.getElementById("eng-st");
const engCrts = document.getElementById("eng-credit");
const otherSt = document.getElementById("other-st");
const otherCrts = document.getElementById("other-credit");
const coreSt = document.getElementById("core-st");
const coreCrts = document.getElementById("core");
const choiceSt = document.getElementById("choice-st");
const choice = document.getElementById("choice");
const sumSt = document.getElementById("sum-st");
const sumCrts = document.getElementById("sum");
const libReset = document.getElementById("lib-reset");
const libCheck = document.getElementById("lib-check");

//정의-전공 영역
const majForm = document.getElementById("maj-form");
const basicSt = document.getElementById("basic-st");
const basic = document.getElementById("basic");
const requiredSt = document.getElementById("required-st");
const required = document.getElementById("required");
const majorSt = document.getElementById("major-st");
const major = document.getElementById("major");
const doubleSt = document.getElementById("double-st");
const double = document.getElementById("double");
const doubleNone = document.getElementById("double-none");
const planSt = document.getElementById("plan-st");
const plan = document.getElementById("plan");
const planNone = document.getElementById("plan-none");
const planCross = document.getElementById("plan-cross");
const minorSt = document.getElementById("minor-st");
const minor = document.getElementById("minor");
const minorNone = document.getElementById("minor-none");
const freechoiceSt = document.getElementById("freechoice-st");
const freechoice = document.getElementById("freechoice");
const teachingSt = document.getElementById("teaching-st");
const teaching = document.getElementById("teaching");
const teachingNone = document.getElementById("teaching-none");
const totalSt = document.getElementById("total-st");
const total = document.getElementById("total");
const majReset = document.getElementById("maj-reset");
const majCheck = document.getElementById("maj-check");
//정의-기타 졸업요건
const etcForm = document.getElementById("etc-form");
const average = document.getElementById("average");
const etcReset = document.getElementById("etc-reset");
const etcCheck = document.getElementById("etc-check");

//기본 정보 & 교양 영역
function libResult() {

  if (Number(year.value) === 0) {
    year.scrollIntoView();
    return swal("입학연도를 선택하세요.", "", "error");
  } else {
    libCal();
  }
}


function libCal() {
  let libResult = "입학연도: " + Number(year.value) + "년\n공통교양\n";

  const core1 = document.getElementById("core1").checked;
  const core2 = document.getElementById("core2").checked;
  const core3 = document.getElementById("core3").checked;
  const core4 = document.getElementById("core4").checked;
  const core5 = document.getElementById("core5").checked;

  if (Number(korSt.value) > Number(korCrts.value)) {
    libResult += "- 국어: " + [Number(korSt.value) - Number(korCrts.value)] + "학점 미달\n"
  } else {
    libResult += "- 국어: 기준 통과\n"
  }

  if (Number(engSt.value) > Number(engCrts.value)) {
    libResult += "- 영어: " + [Number(engSt.value) - Number(engCrts.value)] + "학점 미달\n"
  } else {
    libResult += "- 영어: 기준 통과\n"
  }

  if (Number(otherSt.value) > Number(otherCrts.value)) {
    libResult += "- 기타: " + [Number(otherSt.value) - Number(otherCrts.value)] + "학점 미달\n"
  } else {
    libResult += "- 기타: 기준 통과\n"
  }

  if (Number(coreSt.value) > Number(coreCrts.value)) {
    libResult += "핵심교양: " + [Number(coreSt.value) - Number(coreCrts.value)] + "학점 미달\n- 미이수 영역: "
  } else {
    libResult += "핵심교양: 기준 통과\n- 미이수 영역: "
  }

  if (!core1) {
    libResult += "도전 "
  }

  if (!core2) {
    libResult += "창의 "
  }

  if (!core3) {
    libResult += "융합 "
  }

  if (!core4) {
    libResult += "신뢰 "
  }

  if (!core5) {
    libResult += "소통 "
  }

  libResult += "\n선택교양: " + Number(choice.value) + "학점 이수\n"

  if (Number(sumSt.value) > Number(sumCrts.value)) {
    libResult += "교양 합계: " + [Number(sumSt.value) - Number(sumCrts.value)] + " 학점 미달"
  } else if (Number(sumCrts.value) > 45) {
    libResult += "교양 합계:\n최대 학점 초과 - 45학점까지만 인정됩니다."
  } else {
    libResult += "교양 합계: 기준 통과"
  }


  if (Number(korSt.value) <= Number(korCrts.value) &&
    Number(engSt.value) <= Number(engCrts.value) &&
    Number(otherSt.value) <= Number(otherCrts.value) &&
    Number(coreSt.value) <= Number(coreCrts.value) &&
    core1 && core2 && core3 && core4 && core5 &&
    Number(sumSt.value) <= Number(sumCrts.value) &&
    Number(sumCrts.value) <= 45) {
    swal("교양 영역 결과", libResult, "success");
  } else if (Number(korSt.value) <= Number(korCrts.value) &&
    Number(engSt.value) <= Number(engCrts.value) &&
    Number(otherSt.value) <= Number(otherCrts.value) &&
    Number(coreSt.value) <= Number(coreCrts.value) &&
    core1 && core2 && core3 && core4 && core5 &&
    Number(sumSt.value) <= Number(sumCrts.value) &&
    Number(sumCrts.value) > 45) {
    swal("교양 영역 결과", libResult, "warning");
  } else {
    swal("교양 영역 결과", libResult, "error");
  }

}


function sumCal() {
  sumCrts.value = Number(korCrts.value) + Number(engCrts.value) + Number(otherCrts.value) + Number(coreCrts.value) + Number(choice.value);
}


korCrts.addEventListener("change", sumCal);
engCrts.addEventListener("change", sumCal);
otherCrts.addEventListener("change", sumCal);
coreCrts.addEventListener("change", sumCal);
choice.addEventListener("change", sumCal);

libCheck.addEventListener("click", libResult);


//전공 영역
function majTableReset() {
  document.getElementById("double-table").style.display = "none"
  document.getElementById("plan-table").style.display = "none"
}

majReset.addEventListener("check", majTableReset)

function majResult() {
  if (Number(year.value) === 0) {
    year.scrollIntoView();
    return swal("입학연도를 선택하세요.", "", "error");
  } else if (Number(multiMajor.value) === 0) {
    year.scrollIntoView();
    return swal("다전공을 선택하세요.", "", "error");
  } else {
    majCal();
  }
}

function majCal() {
  let majResult = "입학연도: " + Number(year.value) + "년\n"

  if (Number(basicSt.value) > Number(basic.value)) {
    majResult += "전공기초: " + [Number(basicSt.value) - Number(basic.value)] + "학점 미달\n"
  } else {
    majResult += "전공기초: 기준 통과\n"
  }

  if (Number(requiredSt.value) > Number(required.value)) {
    majResult += "전공필수: " + [Number(requiredSt.value) - Number(required.value)] + "학점 미달\n"
  } else {
    majResult += "전공필수: 기준 통과\n"
  }

  if (Number(majorSt.value) > Number(major.value)) {
    majResult += "전공: " + [Number(majorSt.value) - Number(major.value)] + "학점 미달\n\n"
  } else {
    majResult += "전공: 기준 통과\n\n"
  }

  if (!doubleNone.checked) {
    if (Number(doubleSt.value) > Number(double.value)) {
      majResult += "복수전공: " + [Number(doubleSt.value) - Number(double.value)] + "학점 미달\n\n"
    } else {
      majResult += "복수전공:\n최소학점 기준 통과 - 복수전공 세부기준 확인 요망\n\n"
    }
  }

  if (!planNone.checked) {
    if (Number(planSt.value) > [Number(plan.value) + Number(planCross.value)]) {
      majResult += "자기설계전공: " + [Number(planSt.value) - [Number(plan.value) + Number(planCross.value)]] + "학점 미달\n\n"
    } else {
      majResult += "자기설계전공:\n최소 학점 기준 통과 - 자기설계전공 세부기준 확인 요망\n\n"
    }
  }

  if (!minorNone.checked) {
    if (Number(minorSt.value) > Number(minor.value)) {
      majResult += "부전공: " + [Number(minorSt.value) - Number(minor.value)] + "학점 미달\n"
    } else {
      majResult += "부전공: 최소 학점 기준 통과\n"
    }
  }

  if (Number(freechoiceSt.value) > Number(freechoice.value)) {
    majResult += "자유선택: " + [Number(freechoiceSt.value) - Number(freechoice.value)] + "학점 미달\n"
  } else {
    majResult += "자유선택:\n최소 학점 기준 통과 - CAU세미나 이수 확인\n"
  }

  if (!teachingNone.checked) {
    if (Number(teachingSt.value) > Number(teaching.value)) {
      majResult += "교직: " + [Number(teachingSt.value) - Number(teaching.value)] + "학점 미달\n\n"
    } else {
      majResult += "교직: 최소 학점 기준 통과\n\n"
    }
  }

  if (Number(totalSt.value) > Number(total.value)) {
    majResult += "총 이수학점: " + [Number(totalSt.value) - Number(total.value)] + "학점 미달"
  } else {
    majResult += "총 이수학점: 기준 통과"
  }


  if (Number(basicSt.value) <= Number(basic.value) &&
    Number(requiredSt.value) <= Number(required.value) &&
    Number(majorSt.value) <= Number(major.value) && [(Number(doubleSt.value) <= Number(double.value)) || doubleNone.checked] && [(Number(planSt.value) <= Number(plan.value)) || planNone.checked] && [(Number(minorSt.value) <= Number(minor.value)) || minorNone.checked] &&
    Number(freechoiceSt.value) <= Number(freechoice.value) && [(Number(teachingSt.value) <= Number(teaching.value)) || teachingNone.checked] &&
    Number(totalSt.value) <= Number(total.value)) {
    swal("전공 영역 결과", majResult, "success");
  } else {
    swal("전공 영역 결과", majResult, "error");
  }

}

function totalCal() {
  if (Number(sumCrts.value) > 45) {
    total.value = 45 + Number(basic.value) + Number(major.value) + Number(double.value) + Number(plan.value) + Number(minor.value) + Number(freechoice.value) + Number(teaching.value)
  } else {
    total.value = Number(sumCrts.value) + Number(basic.value) + Number(major.value) + Number(double.value) + Number(plan.value) + Number(minor.value) + Number(freechoice.value) + Number(teaching.value)
  }

}

basic.addEventListener("change", totalCal);
major.addEventListener("change", totalCal);
double.addEventListener("change", totalCal);
plan.addEventListener("change", totalCal);
minor.addEventListener("change", totalCal);
freechoice.addEventListener("change", totalCal);
teaching.addEventListener("change", totalCal);

majCheck.addEventListener("click", majResult);


//기타 졸업요건
function etcResult() {
  const engExam = document.getElementById("eng-pass").checked;
  const chnExam = document.getElementById("chn-pass").checked;
  const korExam = document.querySelector("#kor-pass").checked;
  const majPaper = document.getElementById("firstmajor").checked;
  const doublePaper = document.getElementById("doublemajor").checked;
  const average = Number(document.getElementById("average").value);

  let etcResult = "졸업 인정제\n"

  if (!engExam) {
    etcResult += "- 영어: 미통과\n"
  } else {
    etcResult += "- 영어: 통과\n"
  }

  if (!chnExam) {
    etcResult += "- 한자: 미통과\n"
  } else {
    etcResult += "- 한자: 통과\n"
  }

  if (!korExam) {
    etcResult += "- 한국어: 미통과\n"
  } else {
    etcResult += "- 한국어: 통과\n"
  }

  etcResult += "졸업시험 결과\n"

  if (!majPaper) {
    etcResult += "주전공: 불합격\n"
  } else {
    etcResult += "주전공: 합격\n"
  }

  if (!doublePaper) {
    etcResult += "복수전공: 불합격\n"
  } else {
    etcResult += "복수전공: 합격/해당없음\n"
  }

  if (average < 2) {
    etcResult += "전 학년 평점: 졸업 불가"
  } else {
    etcResult += "전 학년 평점: 기준 통과"
  }


  if (!engExam && !chnExam && !korExam &&
    !majPaper && !doublePaper &&
    Number(average.value) < 2) {
    swal("기타 졸업요건 결과", etcResult, "error");
  } else {
    swal("기타 졸업요건 결과", etcResult, "success");
  }

}

etcCheck.addEventListener("click", etcResult);


//리셋
function resetor(form) {
  form.reset();
};

libReset.addEventListener("click", function() {
  resetor(libForm)

});

majReset.addEventListener("click", function() {
  resetor(majForm)
});

majReset.addEventListener("click", function() {
  const multiMajorForm = document.getElementById("multi-major-form")
  resetor(multiMajorForm)
});

etcReset.addEventListener("click", function() {
  resetor(etcForm)
});


//색 변화
function colorChange(st, crts) {
  if (Number(st.value) > Number(crts.value)) {
    crts.style.color = "red";
  } else {
    crts.style.color = "blue";
  }
}

korCrts.addEventListener("change", function() {
  colorChange(korSt, korCrts)
});
engCrts.addEventListener("change", function() {
  colorChange(engSt, engCrts)
});
otherCrts.addEventListener("change", function() {
  colorChange(otherSt, otherCrts)
});
coreCrts.addEventListener("change", function() {
  colorChange(coreSt, coreCrts)
});
choice.addEventListener("change", function() {
  colorChange(choiceSt, choice)
});


korCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
engCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
otherCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
coreCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
choice.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});


basic.addEventListener("change", function() {
  colorChange(basicSt, basic)
});
required.addEventListener("change", function() {
  colorChange(requiredSt, required)
});
major.addEventListener("change", function() {
  colorChange(majorSt, major)
});
double.addEventListener("change", function() {
  colorChange(doubleSt, double)
});
plan.addEventListener("change", function() {
  colorChange(planSt, plan)
});
minor.addEventListener("change", function() {
  colorChange(minorSt, minor)
});
freechoice.addEventListener("change", function() {
  colorChange(freechoiceSt, freechoice)
});
teaching.addEventListener("change", function() {
  colorChange(teachingSt, teaching)
});


basic.addEventListener("change", function() {
  colorChange(totalSt, total)
});
required.addEventListener("change", function() {
  colorChange(totalSt, total)
});
major.addEventListener("change", function() {
  colorChange(totalSt, total)
});
double.addEventListener("change", function() {
  colorChange(totalSt, total)
});
plan.addEventListener("change", function() {
  colorChange(totalSt, total)
});
minor.addEventListener("change", function() {
  colorChange(totalSt, total)
});
freechoice.addEventListener("change", function() {
  colorChange(totalSt, total)
});
teaching.addEventListener("change", function() {
  colorChange(totalSt, total)
});


function averageChange() {
  if (2 > Number(average.value)) {
    average.style.color = "red";
  } else {
    average.style.color = "blue";
  }
}

average.addEventListener("change", averageChange);


function noneHandler(none, crts) {
  if (none.checked) {
    crts.readOnly = true;
    crts.value = 0
  } else {
    crts.readOnly = false;
  }
}

minorNone.addEventListener("change", function() {
  noneHandler(minorNone, minor)
});
minorNone.addEventListener("change", totalCal);
teachingNone.addEventListener("change", function() {
  noneHandler(teachingNone, teaching)
});
teachingNone.addEventListener("change", totalCal);


function multiMajorChange() {
  const multiMajorText = multiMajor.options[multiMajor.selectedIndex].text;
  const doubleTable = document.getElementById("double-table");
  const planTable = document.getElementById("plan-table");
  majorSt.value = multiMajor.value;
  if (multiMajorText === "--") {
    doubleTable.style.display = "none";
    planTable.style.display = "none";
  } else if (multiMajorText === "전공심화") {
    doubleTable.style.display = "none";
    double.value = 0;
    doubleNone.checked = true;

    planTable.style.display = "none";
    plan.value = 0;
    planNone.checked = true;
  } else if (multiMajorText === "복수전공") {
    doubleTable.style.display = "";
    double.value = 0;
    doubleNone.checked = false;
    planTable.style.display = "none";
    plan.value = 0;
    planNone.checked = true;
  } else if (multiMajorText === "자기설계전공") {
    doubleTable.style.display = "none";
    double.value = 0;
    doubleNone.checked = true;
    planTable.style.display = "";
    plan.value = 0;
    planNone.checked = false;
  }

}

multiMajor.addEventListener("change", multiMajorChange);


const aboutBtn = document.getElementById("about")

function aboutInfo() {
  swal("개발자 정보", "Code by Seoyeon\nviolay2002@gmail.com", "info");
}

aboutBtn.addEventListener("click", aboutInfo);
