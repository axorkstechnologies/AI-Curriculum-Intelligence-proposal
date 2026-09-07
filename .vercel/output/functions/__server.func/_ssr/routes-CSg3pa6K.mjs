import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CSg3pa6K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function fmt(n) {
	return new Intl.NumberFormat("en-GB").format(Math.round(n));
}
function RoiCalculator() {
	const [teachers, setTeachers] = (0, import_react.useState)(28);
	const [hours, setHours] = (0, import_react.useState)(4);
	const weeks = 36;
	const { annual, fte, chatgpt } = (0, import_react.useMemo)(() => {
		const annualHours = teachers * hours * weeks;
		return {
			annual: annualHours,
			fte: annualHours / 1440,
			chatgpt: teachers * (25 / 60) * weeks
		};
	}, [teachers, hours]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "print-avoid rounded-xl border border-line bg-paper-3 p-5 sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xs tracking-[0.18em] uppercase text-faint",
				children: "Time returned — model, not a promise"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-2xl font-medium text-ink",
				children: "What happens if this school takes hours back."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-serif text-[15px] leading-relaxed text-muted",
				children: "OECD TALIS puts planning near 6.5 hours a week. Weekly AI users in the Gallup/Walton study recover 5.9 hours. Generic ChatGPT, in a rigorous UK trial, recovered 25 minutes. Cadence is built for the institutional gap between those two numbers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex items-baseline justify-between font-sans text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "Teachers in scope"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums font-medium text-ink",
							children: teachers
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 8,
							max: 80,
							value: teachers,
							onChange: (e) => setTeachers(Number(e.target.value)),
							className: "w-full accent-steel"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex items-baseline justify-between font-sans text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "Hours reclaimed / teacher / week"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums font-medium text-ink",
							children: hours.toFixed(1)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 1.5,
							max: 6,
							step: .5,
							value: hours,
							onChange: (e) => setHours(Number(e.target.value)),
							className: "w-full accent-steel"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Hours returned / year",
						value: fmt(annual),
						hint: "36 teaching weeks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "FTE equivalent",
						value: fte.toFixed(1),
						hint: "at 40h × 36 weeks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "ChatGPT-only baseline",
						value: fmt(chatgpt),
						hint: "25 min/week, same staff"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-sans text-xs leading-relaxed text-faint",
				children: "Conservative default is 4 hours, below the Gallup weekly-user figure, because Cadence is not “AI used sometimes” — it is the school’s planner. The ChatGPT baseline is the NFER/EEF RCT. Cadence is not claiming that RCT. Cadence is built because that RCT is not enough."
			})
		]
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-paper px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-[11px] uppercase tracking-[0.14em] text-faint",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-3xl tabular-nums text-ink",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-sans text-xs text-muted",
				children: hint
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var base = [
	{
		w: 9,
		title: "Cells & organisation",
		bloom: "Understand",
		locked: false
	},
	{
		w: 10,
		title: "Practical: microscopy",
		bloom: "Apply",
		locked: false
	},
	{
		w: 11,
		title: "Nutrients & diet",
		bloom: "Analyse",
		locked: false
	},
	{
		w: 12,
		title: "Digestive system",
		bloom: "Apply",
		locked: false
	},
	{
		w: 13,
		title: "Formative checkpoint",
		bloom: "Evaluate",
		locked: true
	},
	{
		w: 14,
		title: "Respiration intro",
		bloom: "Understand",
		locked: false
	},
	{
		w: 15,
		title: "Practical: respiration",
		bloom: "Apply",
		locked: false
	},
	{
		w: 16,
		title: "Mid-year paper window",
		bloom: "Evaluate",
		locked: true
	}
];
var rebalanced = [
	{
		w: 9,
		title: "Cells & organisation",
		bloom: "Understand",
		locked: false
	},
	{
		w: 10,
		title: "Practical: microscopy",
		bloom: "Apply",
		locked: false
	},
	{
		w: 11,
		title: "Cover pack: retrieval + reading",
		bloom: "Remember",
		locked: false,
		absent: true
	},
	{
		w: 12,
		title: "Cover pack: diet investigation",
		bloom: "Understand",
		locked: false,
		absent: true
	},
	{
		w: 13,
		title: "Formative checkpoint",
		bloom: "Evaluate",
		locked: true
	},
	{
		w: 14,
		title: "Nutrients + digestion (compressed)",
		bloom: "Analyse",
		locked: false
	},
	{
		w: 15,
		title: "Respiration + practical",
		bloom: "Apply",
		locked: false
	},
	{
		w: 16,
		title: "Mid-year paper window",
		bloom: "Evaluate",
		locked: true
	}
];
function WorkedExample() {
	const [absent, setAbsent] = (0, import_react.useState)(true);
	const weeks = absent ? rebalanced : base;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "print-avoid",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs tracking-[0.18em] uppercase text-faint",
					children: "Illustrative scenario — Year 6 Science, Cambridge Lower Secondary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl font-medium text-ink",
					children: "A teacher is absent for two weeks. The May paper does not move."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setAbsent((v) => !v),
					className: cn("h-11 shrink-0 rounded-md px-4 font-sans text-sm font-medium", absent ? "bg-ink text-paper" : "border border-rule bg-paper-3 text-ink"),
					children: absent ? "Absence on — Weeks 11–12" : "Absence off — original pacing"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-3xl font-serif text-[15px] leading-relaxed text-muted",
				children: "Ms A is out in Weeks 11–12. Checkpoint in Week 13 and the mid-year paper in Week 16 are locked. Cadence does not “skip the topic.” It issues a 48-hour cover pack, preserves CLOs, compresses two theory weeks after the teacher returns, and keeps the practical that needs the lab."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4",
				children: weeks.map((week) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("rounded-lg border px-3 py-3", week.absent ? "border-danger/30 bg-danger/5" : week.locked ? "border-steel/30 bg-steel/5" : "border-line bg-paper-3"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-sans text-[11px] uppercase tracking-[0.14em] text-faint",
							children: [
								"Week ",
								week.w,
								week.locked ? " · locked" : "",
								week.absent ? " · cover" : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-sm font-medium leading-snug text-ink",
							children: week.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-sans text-xs text-muted",
							children: ["Bloom · ", week.bloom]
						})
					]
				}, week.w))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						title: "What the substitute receives",
						body: "Period-length timings, command-word objectives, materials list, AfL check, homework, and what not to invent. Written so a competent cover teacher can land the hour."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						title: "What the HOD sees",
						body: "Coverage ledger: two theory CLOs deferred, checkpoint intact, practical not dropped, Week 16 paper still samples AO1/AO2 as planned. Risk is visible, not rumoured."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						title: "What the teacher returns to",
						body: "A rebalanced fortnight, not a guilt pile. She knows what was covered, what was not, and which two lessons are now compressed rather than skipped."
					})
				]
			})
		]
	});
}
function Note({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-paper-3 px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-sm font-medium text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-serif text-[14px] leading-relaxed text-muted",
			children: body
		})]
	});
}
var sources = [
	{
		id: "talis2024",
		cite: "OECD (2025). Results from TALIS 2024.",
		note: "Lesson planning ~14% of teacher working time; marking ~9%. Full-time teachers work ~41 hours/week on average. Individual lesson planning rose by about 30 minutes/week versus 2018."
	},
	{
		id: "talis2018",
		cite: "OECD (2019). TALIS 2018 Results, Volume I.",
		note: "Teachers spent 6.5 hours/week on planning and lesson preparation (~17% of working time) and 4.2 hours on marking."
	},
	{
		id: "gallup2025",
		cite: "Gallup & Walton Family Foundation (2025). Teaching for Tomorrow.",
		note: "Teachers who use AI at least weekly save 5.9 hours/week — six weeks per 37.4-week school year. 60% of US teachers used AI in 2024–25; lesson preparation is the most common use."
	},
	{
		id: "nfer",
		cite: "NFER / Education Endowment Foundation (2024–25). ChatGPT in Year 7–8 science lesson preparation RCT.",
		note: "Generic ChatGPT saved ~25 minutes/week (31% of that planning slice). Independent raters found no quality gain versus non-AI plans."
	},
	{
		id: "unesco-ai",
		cite: "UNESCO (2024). AI competency framework for teachers; UNESCO (2023). Guidance for generative AI in education and research.",
		note: "Teachers must not be replaced. Human agency, data privacy, and pedagogical design are the conditions of legitimate AI in schools."
	},
	{
		id: "unesco-agency",
		cite: "UNESCO (2025). Promoting and protecting teacher agency in the age of artificial intelligence.",
		note: "Institutional AI must enlarge teacher judgement, not automate it away."
	},
	{
		id: "tribune",
		cite: "The Express Tribune (9 Nov 2024). “The day doesn’t end when the school bell rings.”",
		note: "Pakistani teachers routinely reopen laptops at 5–6pm for lesson plans, copies, and parent messages. Punjab primary STR ~39:1 (World Bank SABER)."
	},
	{
		id: "saber",
		cite: "World Bank SABER Teachers, Punjab.",
		note: "More than 90% of statutory working hours devoted to teaching; no guidance on time for lesson planning, mentoring, or instructional improvement."
	},
	{
		id: "snc",
		cite: "Pervaiz et al. (2025). Overloaded model textbooks of SNC 2020. Policy Research Journal.",
		note: "Holidays, exams and co-curricular days remove 25–30% of the teaching year, while textbook density exceeds the scheme of studies."
	},
	{
		id: "mckinsey",
		cite: "McKinsey Global Institute (teacher time / automation analyses, cited 2025–26).",
		note: "AI could automate 20–40% of teacher administrative work. Current weekly AI users capture only a fraction of that."
	},
	{
		id: "cambridge",
		cite: "Cambridge International syllabuses and teacher guides (IGCSE/O Level CS 0478/2210; ICT 0417; A-Level CS 9618).",
		note: "Objectives must use command words. Assessment objectives (AO1–AO3), differentiation, and AfL are not optional decoration — they are how papers are marked."
	}
];
var toc = [
	{
		id: "memo",
		n: "00",
		label: "Executive memo"
	},
	{
		id: "problem",
		n: "01",
		label: "The hours we do not count"
	},
	{
		id: "trap",
		n: "02",
		label: "The generic-AI trap"
	},
	{
		id: "what",
		n: "03",
		label: "What Cadence is"
	},
	{
		id: "example",
		n: "04",
		label: "A fortnight that still lands"
	},
	{
		id: "outcomes",
		n: "05",
		label: "Institutional outcomes"
	},
	{
		id: "roi",
		n: "06",
		label: "Time returned"
	},
	{
		id: "why-not-diy",
		n: "07",
		label: "Why this cannot be prompted"
	},
	{
		id: "founder",
		n: "08",
		label: "Why this founder"
	},
	{
		id: "engage",
		n: "09",
		label: "How we work together"
	},
	{
		id: "ask",
		n: "10",
		label: "The ask"
	},
	{
		id: "sources",
		n: "11",
		label: "Sources"
	}
];
function BriefDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "no-print mt-10 border-y border-line py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs uppercase tracking-[0.18em] text-faint",
					children: "Contents"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid gap-1 sm:grid-cols-2",
					children: toc.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${item.id}`,
						className: "flex items-baseline gap-3 py-1.5 font-sans text-sm text-ink-soft hover:text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-faint",
							children: item.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
					}) }, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "memo",
				kicker: "00 — For the principal, in one page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight text-ink",
					children: "Teachers are spending the profession’s scarcest resource on reconstructing the year."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Primary and middle-years teachers in this country do not enjoy the quiet luxury of a frozen syllabus. Schemes of work move. Textbooks densify. Calendars lose a quarter of the year to holidays, exams and co-curricular days. Every term, the same professional act is repeated: rebuild the planner, rewrite the lessons, hope the coverage holds if someone is ill." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "OECD TALIS finds that lesson planning alone accounts for roughly one-seventh of a teacher’s working time — about 6.5 hours in the last comparable weekly breakdown, and still 14% in TALIS 2024. In Pakistan those hours mostly happen after the bell, on a laptop opened at five or six in the evening. That is not “preparation.” That is the school’s instructional design, done unpaid, unshared, and uninspected." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Generic AI looks like a rescue and is not. A UK randomised trial found ChatGPT saved twenty-five minutes a week on a slice of science planning, with no gain in lesson quality. Gallup finds that teachers who use AI every week can recover nearly six hours — but only when the tool is actually in the workflow, every week, for real tasks. A chatbot with no school calendar, no mixed-ability bands, and no Cambridge command words will not become that workflow." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cadence is not another LMS, and it is not a website rebuild. It is a curriculum intelligence layer, calibrated to this school, that plans, paces, and rebalances teaching so that coverage, CLOs, and exam windows survive contact with reality. Teachers get the hours back. Leadership gets a ledger. Students get lessons that were designed on purpose." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: "The ask is a 90-day pilot on two year groups, preceded by a two-week calibration workshop led in person by Muhammad Mujahid — Cambridge CS & ICT educator, four CAIE codes, 72% A/B across four consecutive cohorts."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "problem",
				kicker: "01 — The hours we do not count",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight text-ink",
						children: "Higher-secondary teachers can freeze a file. Primary and middle teachers cannot."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "An A-Level specialist can, in a stable year, teach from a set of notes that has already met the paper. A Year 4 or Year 7 teacher cannot. The curriculum is revised, the textbook is overloaded relative to the scheme of studies, the class is mixed-ability, and the week is punctured by sports days, mock windows, and colleagues on leave. Research on Pakistan’s Single National Curriculum textbooks estimates that 25–30% of the teaching year is already gone before a teacher writes a single learning objective." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "World Bank SABER work on Punjab recorded that more than 90% of statutory teacher time is defined as teaching — with no formal allocation for planning, mentoring, or instructional improvement. The planning still happens. It is simply pushed into the evening, where it competes with copies, WhatsApp groups, and family. The Express Tribune’s 2024 reporting on teacher days in Pakistan is not an anecdote. It is the operating system." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Teachers in this founder’s own network have asked, privately, to pay someone to write their lesson plans. That request is the market speaking. It is also an indictment. When professionals are willing to buy back their own evenings, the institution has a design problem, not a motivation problem." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-8 border-l-2 border-steel pl-5 font-serif text-[18px] leading-relaxed text-ink",
						children: "“A school that spends half a teacher’s design time on reconstructing last year’s planner is not a school short of talent. It is a school spending talent on a problem that should have been solved once, then kept alive.”"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "trap",
				kicker: "02 — The generic-AI trap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight text-ink",
						children: "Efficiency without the school inside it is just faster mediocrity."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Teachers already use ChatGPT. UNESCO’s 2024 teacher AI framework and TALIS 2024 both show the same pattern: the most common uses are summarising and generating plans; the least common are assessment and professional judgement. That is rational. A public model will write a lesson on “the digestive system.” It will not know that this campus lost two practicals to a lab clash, that Week 13 is a locked checkpoint, that the mid-year paper must still sample AO2, or that the cover teacher on Tuesday has never taught Science." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The NFER/EEF trial is the honest number for generic tools: about 25 minutes a week, quality unchanged. The Gallup/Walton number — 5.9 hours, six weeks a year — is the number for teachers who put AI into the weekly workflow. The gap between those two figures is not “a better prompt.” It is institutionalisation: calendar, curriculum, coverage, and habit." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A school that “lets teachers use AI” has not integrated AI. It has privatised risk. Every teacher becomes a prompt engineer of uneven skill. Inspection cannot see it. A substitute cannot inherit it. When the teacher is absent, the chatbot does not move the topic to next week. It simply was not asked." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-x-auto print-avoid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[32rem] border-collapse text-left font-sans text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-rule text-[11px] uppercase tracking-[0.14em] text-faint",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3 font-medium",
										children: "Capability"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3 font-medium",
										children: "ChatGPT / generic tools"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Cadence, calibrated"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "text-ink-soft",
								children: [
									[
										"This school’s calendar & exam windows",
										"No",
										"Yes — locked dates hold"
									],
									[
										"Live coverage ledger for the HOD",
										"No",
										"Yes — taught / deferred / at risk"
									],
									[
										"Absence rebalance without dropping CLOs",
										"No",
										"Yes — with cover packs"
									],
									[
										"Cambridge command words & AOs",
										"If the teacher remembers",
										"Default, from the syllabus"
									],
									[
										"Bloom + CLO/PLO on every lesson",
										"Optional",
										"Required"
									],
									[
										"Differentiation across ability bands",
										"A second prompt",
										"Three-band pack"
									],
									[
										"Inspection-ready audit trail",
										"Chat history",
										"Term ledger"
									],
									[
										"Time recovered, published evidence",
										"~25 min/week (NFER)",
										"Built for weekly institutional use"
									]
								].map(([a, b, c]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-line",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 pr-3 font-medium text-ink",
											children: a
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 pr-3",
											children: b
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3",
											children: c
										})
									]
								}, a))
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "what",
				kicker: "03 — What Cadence is (and is not)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight text-ink",
						children: "A curriculum operating layer. Not a chatbot with a school logo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cadence sits above the tools the school already uses. It does not ask you to migrate an LMS, rebuild a website, or abandon Google Workspace. It takes the school’s actual curriculum — schemes of work, textbook editions, academic calendar, assessment windows, timetable realities — and keeps a living plan of the year." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: [
							{
								t: "Term that still closes",
								d: "A year-plan that knows holidays, mocks, co-curricular days, and the date past-paper or revision must begin — including in years that do not sit CAIE."
							},
							{
								t: "Lessons that know why they exist",
								d: "Every period carries command-word objectives, Bloom level, CLO/PLO, timed activities, AfL, and a close. Objectives are not topics. “Acids and bases” is a topic. “Distinguish strong and weak acids using pH evidence” is a lesson."
							},
							{
								t: "Coverage that can be seen",
								d: "Teachers and coordinators see what has been taught, what remains, and when the dangerous squeeze begins. Innovation time is protected because the administrative reconstruction is no longer the job."
							},
							{
								t: "Absence that does not erase a CLO",
								d: "If a teacher is out for a week, topics move. Locked windows do not. Substitutes receive a pack. The returning teacher inherits a ledger, not folklore."
							},
							{
								t: "Differentiation that is default",
								d: "Three ability bands, not a hopeful stretch task added at 11pm. Primary and middle classrooms in this country are mixed. The plan should admit that."
							},
							{
								t: "Human agency, by design",
								d: "UNESCO is explicit: teachers are not to be replaced. Cadence drafts; the teacher edits; the edit teaches the system. Judgement stays in the classroom."
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-line bg-paper-3 px-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-sm font-medium text-ink",
								children: item.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-serif text-[15px] leading-relaxed text-muted",
								children: item.d
							})]
						}, item.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-serif text-[17px] leading-[1.65] text-ink-soft",
						children: "What we will not do: build you a second school information system, scrape student data into a public model, or sell “AI” as a substitute for a department head. The product is teaching time, coverage integrity, and a standard of planning that would survive a Cambridge inspection unembarrassed."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "example",
				kicker: "04 — A fortnight that still lands",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkedExample, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "outcomes",
				kicker: "05 — What the school actually buys",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight text-ink",
					children: "Not features. A change in how the year behaves."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2",
					children: [
						{
							k: "For teachers",
							items: [
								"Evenings returned — planning ceases to be a second unpaid shift",
								"A plan that already knows this week’s constraints",
								"Permission to spend the recovered hours on feedback, labs, and actual pedagogy"
							]
						},
						{
							k: "For heads of department",
							items: [
								"One coverage picture instead of seven versions of a spreadsheet",
								"Schemes that stay aligned across parallel sections",
								"A professional conversation about learning, not about who forgot the planner"
							]
						},
						{
							k: "For school leadership",
							items: [
								"A serious answer to teacher workload that is not “try harder”",
								"Inspection and parent-facing coherence",
								"AI adopted as policy, not as 40 private ChatGPT habits"
							]
						},
						{
							k: "For students",
							items: [
								"Lessons sequenced on purpose, including after disruption",
								"Command words practised in class, not discovered in the exam hall",
								"Teachers who still have the energy to notice them"
							]
						}
					].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-rule pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs uppercase tracking-[0.16em] text-faint",
							children: col.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 font-serif text-[15px] leading-relaxed text-ink-soft",
							children: col.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "pl-4 -indent-4",
								children: ["— ", item]
							}, item))
						})]
					}, col.k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "roi",
				kicker: "06 — Time returned",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoiCalculator, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "why-not-diy",
				kicker: "07 — Why this cannot be prompted into existence",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight text-ink",
					children: "Anyone can generate a lesson. Almost no one can generate a term."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If this brief is handed to a general contractor or pasted into a public model, the school will receive a chatbot that writes lesson plans. That is the easy third of the problem, and it is the third the NFER trial already measured: small time savings, no quality lift, no institutional memory." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The valuable work is not generation. It is calibration. Someone has to sit with the HOD, read the actual scheme, mark the locked dates, name the three ability bands this campus really has, and decide what “done” means for a CLO. Someone has to know that Cambridge markers reward command words and punish topic-shaped objectives. Someone has to refuse a plan that looks complete and is pedagogically empty." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That work does not live in a prompt. It lives in a practice. The school’s mapped year becomes a maintained asset: versioned when CAIE or the national scheme updates, rebalanced when staff are absent, reviewed by teachers rather than imposed on them. Leave with your lesson packs whenever you wish. The operating layer — pacing, coverage, command-word fidelity, absence logic — is the partnership." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "UNESCO’s guidance is the policy backdrop a serious school will eventually be asked about: data protection, human agency, teacher competency, not “we let staff use ChatGPT.” Cadence is designed so leadership can answer that question without wincing." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "founder",
				kicker: "08 — Why this founder",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight text-ink",
						children: "A software engineer who has already been the teacher you are trying to help."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Muhammad Mujahid is a Cambridge-specialist CS and ICT educator with four-plus years of board-exam impact in Karachi. He has prepared 150+ students across O-Level, IGCSE and A-Level, and sustained a 72% A/B rate across four consecutive CAIE cohorts, with a peak of 77% — above school-wide averages in the years those figures were earned. He is qualified across four CAIE codes: O-Level CS 2210, O-Level ICT 0417, IGCSE CS 0478, A-Level CS 9618." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "He is also a software engineer. BSE, Bahria University; capstone as front-end lead on a full-stack learning platform. Microsoft Innovative Educator Expert, 2025. He has authored a school-wide Cambridge-aligned resource library — lesson packs, revision guides, lab worksheets, mocks — that was adopted across year groups. He has already been paid, informally, by teachers who needed plans written. The demand is not hypothetical." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This combination is the reason to commission him rather than a vendor who has read a syllabus PDF. He has written the planners. He has taught the 20–25 student lab. He has sat the parent meeting. He knows which AI output a Cambridge HOD will reject in thirty seconds. The implementation is mostly pedagogy and change management. The software is how that pedagogy stays alive after the workshop ends." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 grid grid-cols-2 gap-px bg-line sm:grid-cols-4",
						children: [
							["150+", "students exam-ready"],
							["72%", "A/B, four cohorts"],
							["4", "CAIE codes taught"],
							["MIEE", "Expert, 2025"]
						].map(([v, k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-paper px-3 py-4 sm:px-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-2xl text-ink sm:text-3xl",
								children: v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-sans text-xs text-muted",
								children: k
							})]
						}, k))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "engage",
				kicker: "09 — How we work together",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight text-ink",
						children: "A calibration, a pilot, then a year that stays honest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-6",
						children: [
							{
								n: "01",
								t: "Discovery workshop — two weeks",
								d: "Leadership interview, HOD mapping, calendar freeze, scheme ingestion, ability-band definition. Paid, finite, and the only way the system learns this school. Output: a calibration dossier the school can read in plain language."
							},
							{
								n: "02",
								t: "90-day pilot — two year groups, one department",
								d: "Term planner, weekly schemes, daily lessons, cover packs, HOD ledger. Teachers edit; edits are the training data. We measure hours returned, coverage integrity, and teacher willingness to continue — not vanity dashboards."
							},
							{
								n: "03",
								t: "Institutional rollout",
								d: "Adjacent departments, coordinator training, parent-communication templates, inspection file. Expansion only after the pilot has earned it."
							},
							{
								n: "04",
								t: "Annual refresh",
								d: "Syllabus updates, new textbook editions, staff changes, next year’s calendar. This is the relationship, not a hostage clause. The school always owns its source curriculum and can export every pack it has approved."
							}
						].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[3rem_1fr] gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl text-faint",
								children: step.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-base font-medium text-ink",
								children: step.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-serif text-[15px] leading-relaxed text-muted",
								children: step.d
							})] })]
						}, step.n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-lg border border-line bg-paper-3 px-5 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs uppercase tracking-[0.16em] text-faint",
							children: "Governance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif text-[15px] leading-relaxed text-ink-soft",
							children: "Student personal data is not required for planning intelligence and will not be ingested. School curriculum materials stay in a school-controlled space. Teachers remain authors of record. UNESCO’s human-centred conditions — agency, privacy, professional competence — are treated as design constraints, not brochure language. A data-processing note is part of the pilot agreement, not an afterthought."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "ask",
				kicker: "10 — The ask",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight text-ink",
						children: "Commission the calibration. Judge us on a term, not a demo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 font-serif text-[17px] leading-[1.65] text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are asking this school to name two year groups and one department, appoint a counterpart (Principal, Academic Coordinator, or HOD), and sit the two-week calibration. Investment is scoped in that conversation against the hours the model above returns — not against the price of a website." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Success in 90 days looks like this: teachers report a material drop in evening reconstruction; the HOD can show coverage without opening seven inboxes; at least one genuine absence has been rebalanced without a CLO being silently dropped; leadership can explain the school’s AI practice in a sentence that would satisfy a visiting inspector." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If those conditions are not met, the pilot ends and the school keeps every pack it approved. If they are met, we have earned the year." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-rule pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl text-ink",
								children: "Muhammad Mujahid"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-sm text-muted",
								children: "Cambridge CS & ICT Educator · O-Level · IGCSE · A-Level · MIEE 2025"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-sans text-sm text-ink-soft",
								children: [
									"+92 308 2789210 · muhammad.mujahid.dev@gmail.com",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"linkedin.com/in/muhammad-mujahid-dev · Karachi"
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "sources",
				kicker: "11 — Sources cited",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-4",
					children: sources.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[2rem_1fr] gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-sans text-sm tabular-nums text-faint",
							children: [i + 1, "."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-sm font-medium text-ink",
							children: s.cite
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-[14px] leading-relaxed text-muted",
							children: s.note
						})] })]
					}, s.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-sans text-xs leading-relaxed text-faint",
					children: "Document CAD-2026-01 · Institutional Brief · Prepared for school leadership · Not a software specification · Figures from published studies are attributed; school-level impact figures (72% A/B, 150+ students, four codes) are the founder’s recorded teaching outcomes · Illustrative Year 6 scenario is labelled as such and is not a completed client case."
				})]
			})
		]
	});
}
function Cover() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-rule pb-10 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-faint",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CAD-2026-01" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "For school leadership" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Karachi · 2026" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 font-sans text-xs uppercase tracking-[0.22em] text-steel",
				children: "Institutional brief"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-ink",
				children: "Cadence"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl font-display text-2xl font-medium leading-snug text-ink-soft sm:text-3xl",
				children: "Return the hours that lesson planning stole."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl font-serif text-[17px] leading-relaxed text-muted",
				children: "Curriculum intelligence for Cambridge and national-curriculum schools — calibrated to your year, your calendar, and the teachers who actually have to teach it. Not an LMS. Not a chatbot. A way for the term to survive contact with absence, mixed ability, and a syllabus that will not sit still."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-1 font-sans text-sm text-ink-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Prepared by Muhammad Mujahid" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cambridge CS & ICT Educator · MIEE 2025" })]
			})
		]
	});
}
function Section({ id, kicker, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "mt-16 scroll-mt-32 border-t border-line pt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-xs uppercase tracking-[0.18em] text-faint",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children
		})]
	});
}
var briefPrompt = `You are a principal of a strategy firm who has spent 35 years writing institutional papers for ministries of education, Cambridge international schools, and boards of governors. You write like a serious OECD/McKinsey hybrid: calm, specific, sourced, no hype, no emoji, no “unlock/revolutionise/leverage/delve/tapestry/landscape” filler, no gold-leaf language, no software specification.

TASK
Produce a complete INSTITUTIONAL BRIEF (ready to paginate as a 10–14 page A4 PDF) titled:

CADENCE
Institutional Brief — Return the hours that lesson planning stole.
Document no. CAD-2026-01
Classification: For school leadership. Not a software specification.

AUDIENCE
Principals, academic directors, and boards of premium Cambridge and national-curriculum schools in Pakistan, with language that would also survive a ministry reading.

FOUNDER (use only these facts; do not invent awards)
Muhammad Mujahid, Karachi. Cambridge CS & ICT educator, O-Level / IGCSE / A-Level. MIEE 2025.
+92-308-2789210 · muhammad.mujahid.dev@gmail.com · linkedin.com/in/muhammad-mujahid-dev
150+ students exam-ready. 72% A/B across four consecutive CAIE cohorts (peak 77%). 4+ years CAIE. Four codes: 2210, 0417, 0478, 9618.
BSE, Bahria University; LMS capstone, front-end lead. Authored a school-wide Cambridge resource library adopted across year groups. Teachers have already asked to pay him to write lesson plans. Targeting Senior Teacher / Subject Coordinator responsibility; this brief is a product he will deliver as founder-practitioner, not as a faceless SaaS.

WHAT CADENCE IS
A curriculum intelligence LAYER, not an LMS, not a website rebuild, not a ChatGPT wrapper. It is calibrated to the school’s actual schemes, calendar, mixed-ability bands, and assessment windows. It produces term planners, weekly schemes, and daily lessons aligned to Bloom, CLOs/PLOs, and Cambridge command words / assessment objectives. It keeps a coverage ledger. If a teacher is absent, topics rebalance around locked exam windows and a cover pack is issued. Teachers edit; judgement stays human (UNESCO: teachers are not to be replaced).

WHAT THE BRIEF MUST NEVER CONTAIN
No tech stack, APIs, models, databases, CI/CD, prompts, architecture diagrams, algorithms, day-rates, or a feature backlog a vendor could build from. If a school can hand this PDF to an IT contractor and get Cadence, you have failed.

ARGUMENT TO MAKE (structure the paper exactly in these sections)
00 Executive memo (one page, SCR: situation, complication, resolution, ask)
01 The hours we do not count — primary/middle vs higher-secondary; Pakistan evenings; SABER Punjab >90% of statutory time defined as teaching; SNC research 25–30% of year lost to holidays/exams/co-curricular
02 The generic-AI trap — NFER/EEF RCT ~25 minutes/week, no quality gain; Gallup/Walton weekly users 5.9 hours / six weeks; TALIS 2024 planning ~14% of time, marking ~9%, OECD full-time ~41h; TALIS 2018 6.5h planning
03 What Cadence is and is not
04 Illustrative scenario (clearly labelled, not a fake case study): Year 6 Cambridge Lower Secondary Science; teacher absent weeks 11–12; Week 13 checkpoint and Week 16 mid-year paper LOCKED; cover packs; CLOs preserved; practical not dropped
05 Outcomes for teachers, HODs, leadership, students
06 Time-returned model (teachers × hours × 36 weeks; contrast ChatGPT 25 min baseline). Conservative default ~4h/week, below Gallup, because Cadence is institutional weekly use. State this is a model, not a completed client result.
07 Why this cannot be prompted into existence — calibration vs generation; school keeps source curriculum and approved packs; operating layer is the partnership
08 Why this founder — only real facts above
09 Engagement: 2-week paid calibration → 90-day pilot (two year groups, one department) → rollout → annual refresh. Governance: no student PII required; UNESCO human-agency constraints
10 The ask — counterpart named, judge on a term, keep packs if it fails
11 Sources, numbered, with a one-line note each

VOICE
Short paragraphs. One memorable sentence a principal will repeat: “Anyone can generate a lesson. Almost no one can generate a term.” Another: “Efficiency without the school inside it is just faster mediocrity.”
Use a comparison table (generic AI vs Cadence) in outcome language.
Close with founder name and contacts.
Footer: Document CAD-2026-01 · figures from published studies attributed · 72%/150+/four codes are founder teaching outcomes · Year 6 scene is illustrative.

OUTPUT
Clean semantic HTML suitable for print-to-PDF: cover, contents, sections with kickers 00–11, blockquote, table, definition list of proof numbers, numbered sources. No CSS frameworks, no JavaScript, no images. Typographic HTML only.`;
var codexPrompt = `You are the founder’s private systems architect and commercial counsel. Produce an INTERNAL ARCHITECTURE CODEX that Muhammad Mujahid will keep on his laptop. Watermark the entire document RESTRICTED — DO NOT CIRCULATE.

TASK
Write CAD-2026-X Architecture Codex: the memory of Cadence — pipelines, constraints, stack options, moat, commercial ranges, clone defence, 8-minute pitch script, and (at the end) two master prompts: one that regenerates the PUBLIC institutional brief, and this one that regenerates the codex. The public brief prompt must be written so that its output contains ZERO architecture a vendor could build from.

AUDIENCE
Only Muhammad. Assume he is a BSE who has taught CAIE CS/ICT (codes 2210, 0417, 0478, 9618), 72% A/B, MIEE 2025, and will pitch to Karachi Cambridge schools.

CONTENTS (use these headings)
A. What you are actually selling (operating layer, not lesson-plan mill)
B. Ten system layers: curriculum graph, calendar service, staff/section registry, coverage ledger, planner compiler, absence rebalancer, differentiation engine, assessment sampler, document renderer, human review loop — each with one paragraph of what it MUST guarantee
C. Curriculum ingestion pipeline (collect → parse → HOD workshop → freeze v1.0 → compile with eval suite → live weekly ledger + absence events). The workshop is the moat; describe why
D. Absence rebalancer as a constrained rescheduler: hard vs soft constraints, objective = minimise CLO risk before next locked date, LLM writes packs FROM a validated sequence, never the reverse. Mention CP-SAT/ILP or rules-validate-LLM-propose
E. Suggested stack (changeable): tenancy, no student PII in prompts, Postgres + object store + optional vectors over school-approved text only, prompt registry versioned separately from app releases, golden-pack eval as a CI gate, staging→canary→prod, residency decided in contract
F. Moat list: lived CAIE judgement; paid calibration gate; hosted layer vs exportable packs; change management; annual syllabus refresh
G. Internal commercial shape (ranges as guidance, not quotes): paid discovery, 90-day pilot, annual campus licence. Refuse source-code and white-label unless it is an acquisition
H. Clone defence: the calm paragraph to say out loud
I. Eight-minute pitch, timed beats, with the actual spoken lines
J. Reproduce BOTH master prompts in full (public brief prompt + this codex prompt) so the founder can regenerate PDFs later

CONSTRAINTS
Be precise. No emoji. No vendor names that lock him. Do not include student data designs. Remind him never to email this document, never to put it on a school Drive, never to read from it in a pitch.
Output clean semantic HTML for print-to-PDF, dark-paper acceptable via simple inline CSS (ink on paper is also fine).`;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium transition-opacity duration-150 disabled:opacity-40 disabled:pointer-events-none select-none", {
	variants: {
		variant: {
			primary: "bg-ink text-paper hover:opacity-90",
			steel: "bg-steel text-steel-fg hover:bg-steel-2",
			ghost: "bg-transparent text-ink hover:bg-paper-2",
			outline: "border border-rule bg-transparent text-ink hover:bg-paper-2",
			paper: "bg-paper text-ink hover:bg-paper-2",
			danger: "bg-danger text-paper hover:opacity-90"
		},
		size: {
			sm: "h-9 px-3 text-sm rounded-sm",
			md: "h-11 px-4 text-sm rounded-md",
			lg: "h-12 px-5 text-base rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function PromptVault() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptCard, {
			title: "Prompt A — Institutional Brief (the file they may hold)",
			filename: "cadence-brief-prompt.txt",
			body: briefPrompt
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptCard, {
			title: "Prompt B — Architecture Codex (never leave the laptop)",
			filename: "cadence-codex-prompt.txt",
			body: codexPrompt
		})]
	});
}
function PromptCard({ title, filename, body }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copy() {
		try {
			await navigator.clipboard.writeText(body);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			setCopied(false);
		}
	}
	function download() {
		const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-lg border border-codex-line bg-codex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 border-b border-codex-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-sm font-medium text-codex-fg",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "paper",
					size: "sm",
					onClick: copy,
					type: "button",
					children: copied ? "Copied" : "Copy prompt"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "paper",
					size: "sm",
					onClick: download,
					type: "button",
					children: "Download .txt"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "max-h-[28rem] overflow-auto p-4 font-mono text-[11px] leading-relaxed text-codex-muted whitespace-pre-wrap",
			children: body
		})]
	});
}
var beats = [
	{
		t: "0:00 — Open on a number",
		d: "“OECD says planning is about a seventh of a teacher’s working week. In our primary and middle years, it is worse: the curriculum moves, the calendar eats a quarter of the year, and the planning happens at 6pm. Your A-Level specialist can freeze a file. Your Year 5 teacher cannot.”"
	},
	{
		t: "1:20 — Name the trap",
		d: "“Staff already use ChatGPT. A UK trial measured it: twenty-five minutes a week, no quality gain. That is not an integration. That is forty private habits the inspector cannot see, and a cover teacher cannot inherit.”"
	},
	{
		t: "2:20 — Say what Cadence is",
		d: "“We are not building you a website. Cadence is a curriculum operating layer, calibrated to this school. It plans the term, writes the lessons to command words and CLOs, and rebalances when someone is absent so the May paper does not move.”"
	},
	{
		t: "3:20 — Tell the fortnight",
		d: "Walk the Year 6 Science absence. Locked checkpoint. Cover packs in 48 hours. Practical kept. CLO not dropped. “This is the part a chatbot cannot do, because nobody asked it the calendar.”"
	},
	{
		t: "4:40 — Why you",
		d: "“I have taught this. Four CAIE codes, 150+ students, 72% A/B across four cohorts, peak 77%. I have already had teachers pay me to write their plans. I also build software. You are not hiring a vendor who read a PDF.”"
	},
	{
		t: "5:40 — Why they must commission you",
		d: "“If you hand this idea to IT, you will get a chatbot with a crest. The product is the calibration: your scheme, your locked dates, your mixed-ability bands, my Cambridge judgement. That does not paste.”"
	},
	{
		t: "6:40 — The ask",
		d: "“Two year groups, one department, two-week calibration, 90-day pilot. Judge us on a term. If coverage, hours, and one real absence do not improve, you keep the packs and we are done. If they do, we have earned the year.”"
	},
	{
		t: "7:30 — Close",
		d: "Stop talking. Put the one-page memo in front of them. Let silence work."
	}
];
function PitchScript() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-4",
		children: beats.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-lg border border-codex-line bg-codex-2 px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-sm font-medium text-codex-fg",
				children: b.t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-serif text-[15px] leading-relaxed text-codex-muted",
				children: b.d
			})]
		}, b.t))
	});
}
var layers = [
	[
		"01",
		"Curriculum graph",
		"Syllabus nodes, prerequisites, CLOs/PLOs, Bloom, command words, paper/AO mapping, textbook edition anchors."
	],
	[
		"02",
		"Calendar service",
		"Term dates, holidays, exam/mocks, co-curricular, Friday/assembly, weather make-up. Locked windows vs movable topics."
	],
	[
		"03",
		"Staff & section registry",
		"Who teaches what, parallel sections, ability bands, named substitutes, lab constraints."
	],
	[
		"04",
		"Coverage ledger",
		"Taught / deferred / at-risk per CLO. Source of truth for HOD. Updated weekly, not rumoured."
	],
	[
		"05",
		"Planner compiler",
		"Year → term → week → period. Every lesson: command-word objectives, timings that sum to the period, AfL, close, homework."
	],
	[
		"06",
		"Absence rebalancer",
		"Constraint pass: locked dates hold, practicals need labs, CLO coverage is non-negotiable, teacher load stays sane. Proposes; human approves."
	],
	[
		"07",
		"Differentiation engine",
		"Three bands by default. Language support. Stretch that is not just 'do more questions'."
	],
	[
		"08",
		"Assessment sampler",
		"Command-word mix and AO weights that match the real paper, including in years with no public exam."
	],
	[
		"09",
		"Document renderer",
		"Teacher pack, cover pack, HOD week sheet, inspection file. Export always available."
	],
	[
		"10",
		"Human review loop",
		"Teacher edit is the gold. Edits fine-tune local memory. Cadence never silently overwrites judgement."
	]
];
function CodexDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl text-codex-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-codex-line pb-10 pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-codex-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CAD-2026-X" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Restricted — do not circulate" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Founder copy" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-12 font-sans text-xs uppercase tracking-[0.22em] text-faint",
						children: "Architecture codex"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-[clamp(2.5rem,7vw,4.8rem)] font-medium leading-[0.95] text-codex-fg",
						children: "Do not share this file."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl font-serif text-[17px] leading-relaxed text-codex-muted",
						children: "This is the memory of the system: pipelines, constraints, moat, commercial shape, talking script, and the two master prompts. The institutional brief on the other tab is what a principal is allowed to hold. If a school can rebuild Cadence from a PDF, the PDF was too generous. This one is allowed to be precise because it stays here."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CodexSection, {
				kicker: "A — What you are actually selling",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You are not selling lesson plans. You are selling a maintained institutional memory of the year. Generation is the commodity. Calibration is the product. Absence-rebalancing under locked exam windows is the demonstration that generic AI cannot copy in a weekend." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Positioning sentence, memorise it: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-codex-fg",
						children: "Cadence is a curriculum operating layer, calibrated to this school, that plans, paces, and rebalances teaching so coverage and exam windows survive contact with reality."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Never say “we’ll just use GPT.” Never send architecture diagrams. Never quote day-rates that make it look cheaper than a coordinator’s salary. Always talk hours returned, inspection coherence, and the two-week workshop that only you can run." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodexSection, {
				kicker: "B — System layers",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-3",
					children: layers.map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[2.5rem_1fr] gap-3 rounded-lg border border-codex-line bg-codex-2 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-codex-muted",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-sm font-medium",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-[14px] leading-relaxed text-codex-muted",
							children: d
						})] })]
					}, n))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodexSection, {
				kicker: "C — Curriculum ingestion pipeline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-3 pl-5 font-serif text-[16px] leading-relaxed text-codex-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Collect."
						}), " Schemes of work, current textbook editions, official syllabus PDFs, academic calendar, timetable, assessment policy, last year’s planners (even the messy ones), past papers where they exist."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Parse."
						}), " Structure into the graph. Human does not type the graph; software proposes, HOD confirms. Wrong parsing is cheaper than wrong pedagogy."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Workshop."
						}), " This is the moat. Two weeks, in person preferred. You mark locked windows, name the real ability bands, kill phantom CLOs, and agree what “taught” means. Output: Calibration Dossier v1.0, in language a principal can read."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Freeze."
						}), " Term v1.0 is versioned. Teachers see drafts, not a moving target. Nightly jobs watch for CAIE/national updates; they never auto-publish into a live term."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Compile."
						}), " Term plans, then weeks, then lessons. Evaluation suite must pass before a pack reaches a teacher: timings sum, command word present, Bloom tagged, three bands present, no empty AfL."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Live."
						}), " Weekly coverage check-in (two taps: taught / slipped). Absence events open a rebalance proposal. Human approves. Cover pack emits within a working day, target 48 hours."] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CodexSection, {
				kicker: "D — Absence rebalancer, conceptually",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Treat it as a constrained rescheduler, not as “ask the model to shuffle weeks.”" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 font-serif text-[16px] leading-relaxed text-codex-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Hard constraints: locked assessment windows, lab/room capacity, statutory holidays, teacher contract load." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Soft constraints: keep practicals near their theory, avoid compressing two high-Bloom lessons into one period, prefer retrieval cover over new content when the substitute is weak." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Objective: minimise CLO risk before the next locked date. Not “cover as many pages as possible.”" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Output: a diff the HOD can approve in five minutes, plus cover packs, plus a note to parents only if the school policy wants one." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4",
						children: "Implementation options, in order of sanity: (1) rule engine + ILP/CP-SAT for the shuffle, LLM only to write the packs from the new sequence; (2) LLM proposes sequence, rules validate. Never the reverse. Models are eloquent and weak at calendars."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodexSection, {
				kicker: "E — Suggested stack (you may change this; do not print it)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "w-full min-w-[30rem] text-left font-sans text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
							["Interface", "Web app, Google Workspace sign-in for teachers. Mobile-usable cover packs. Print CSS for paper-first HODs."],
							["API", "Node or FastAPI. School tenancy hard-isolated. No student PII in prompts."],
							["Store", "Postgres for graph + ledger + versions. Object store for packs. Vector index only over school-approved curriculum text."],
							["Models", "Strong general model for drafting. Your gold-set of CAIE-aligned lessons for evaluation. Optional later: small local model for offline campuses."],
							["Prompt registry", "Versioned prompts, separate from app releases. Rollback prompts without redeploying the site."],
							["Eval", "Golden pack suite: command-word presence, period-length, band count, AO mix, no hallucinated syllabus codes."],
							["CI/CD", "GitHub Actions → staging (one pilot school) → production. Prompt eval is a required check. Canary a department before a campus."],
							["Observability", "Structured logs, pack_id, prompt_version, school_id. Redact content in third-party tools."],
							["Residency", "Prefer a region the school will accept (PK / GCC / EU). Contract first, then architecture."]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-codex-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-4 font-medium whitespace-nowrap",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 text-codex-muted",
								children: v
							})]
						}, k)) })
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodexSection, {
				kicker: "F — Moat, written so you do not give it away",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-3 pl-5 font-serif text-[16px] leading-relaxed text-codex-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Lived CAIE judgement."
						}), " Four codes, 72% A/B, a resource library already adopted school-wide. A vendor who has not marked a 9618 paper will ship topic-shaped objectives. You will catch that in review without trying."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Calibration workshop as paid gate."
						}), " They cannot skip to “just build it.” The dossier is produced by you, on their materials, in their rooms. A software house receiving only the public brief will build MagicSchool with a crest."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-codex-fg",
								children: "Hosted operating layer vs exportable packs."
							}),
							" ",
							"School owns source curriculum and every approved pack. They do not leave with the rebalancer, the eval suite, or the command-word compiler. This is fair, and you should say it in the brief (you already did, in softer language)."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Change management."
						}), " HODs, reluctant heads of primary, cover-teacher culture, parent WhatsApp. That is most of the work. Anyone selling “an app” will die in week three."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-codex-fg",
							children: "Annual syllabus refresh."
						}), " CAIE and national documents move. The school will not want to re-prompt a chatbot every August. That retainer is the business."] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CodexSection, {
				kicker: "G — Commercial shape (internal ranges, not offers)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Quote hours returned, then price. Do not lead with PKR. After they nod at the hours, a Karachi premium Cambridge campus can typically bear:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 font-serif text-[16px] leading-relaxed text-codex-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Discovery / calibration: a serious five-figure PKR fee (think coordinator-weeks, not “free demo”). Non-refundable. They are buying your attention and a dossier." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— 90-day pilot: larger, scoped to two year groups. Includes training, packs, HOD dashboard, two absence drills (simulate one if nobody falls ill)." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Annual campus licence + refresh: the number that funds you to keep the graph honest. Per extra department, a step-up, not a full second build." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4",
						children: "If they ask for source code: no. If they ask for a white-label so their IT team can “take it from here”: no, unless the cheque is an acquisition. If they want a government RFP later, the public brief is already written at that register; you add procurement language, you do not add architecture."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CodexSection, {
				kicker: "H — If they try to clone you",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "They will. Your reply, calm:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-4 border-l-2 border-rule pl-4 font-serif text-[17px] leading-relaxed text-codex-fg",
						children: "“You can generate lessons this afternoon. You cannot generate a year that still lands on the right paper if three teachers were absent in February. That is the work, and it starts with the calibration, which I run.”"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4",
						children: "Then offer to shorten discovery, not to hand over a spec. If IT insists on a build-vs-buy memo, give them the comparison table from the brief and the NFER 25-minute figure. That memo already says buy."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodexSection, {
				kicker: "I — Eight-minute pitch",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PitchScript, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CodexSection, {
				kicker: "J — Master prompts (for regenerating the two PDFs)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6",
					children: "These are for you, later, in any strong model. They reconstruct the documents. They are not for schools. Paste as a single message. Attach your CV."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptVault, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 border-t border-codex-line pt-6 font-sans text-xs leading-relaxed text-codex-muted",
				children: "CAD-2026-X · Architecture Codex · Founder eyes only · Pin CAIE2210 · Destroy paper copies after use · Do not mail, WhatsApp, or upload this tab’s contents to a school shared drive."
			})
		]
	});
}
function CodexSection({ kicker, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-14 border-t border-codex-line pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-xs uppercase tracking-[0.18em] text-codex-muted",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-4 font-serif text-[16px] leading-relaxed text-codex-muted [&_em]:italic",
			children
		})]
	});
}
var VAULT_KEY = "cadence-vault-unlocked";
var VAULT_HINT = "O-Level Computer Science syllabus code, no spaces or dashes.";
function isVaultUnlocked() {
	if (typeof window === "undefined") return false;
	return sessionStorage.getItem(VAULT_KEY) === "1";
}
function unlockVault(pin) {
	if (pin.replace(/[\s-]/g, "").toUpperCase() === "CAIE2210") {
		sessionStorage.setItem(VAULT_KEY, "1");
		return true;
	}
	return false;
}
function lockVault() {
	sessionStorage.removeItem(VAULT_KEY);
}
function VaultGate({ onUnlock }) {
	const [pin, setPin] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	function submit(e) {
		e.preventDefault();
		if (unlockVault(pin)) {
			setError(false);
			onUnlock();
			return;
		}
		setError(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md px-1 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xs uppercase tracking-[0.2em] text-codex-muted",
				children: "Restricted"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium text-codex-fg",
				children: "Architecture Codex"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-serif text-[16px] leading-relaxed text-codex-muted",
				children: "This tab is the founder file: pipelines, moat, commercial shape, pitch script, and the two master prompts. It is not for principals. If you are in a meeting, go back to the Institutional Brief."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-8 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs uppercase tracking-[0.16em] text-codex-muted",
							children: "Passphrase"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: pin,
							onChange: (e) => {
								setPin(e.target.value);
								setError(false);
							},
							autoComplete: "off",
							className: "mt-2 h-12 w-full rounded-md border border-codex-line bg-codex-2 px-3 font-mono text-sm text-codex-fg outline-none focus:border-rule",
							placeholder: "Syllabus code"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs text-codex-muted",
						children: VAULT_HINT
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-sm text-danger",
						children: "That is not the code."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "paper",
						className: "w-full",
						children: "Open vault"
					})
				]
			})
		]
	});
}
function AppShell() {
	const [doc, setDoc] = (0, import_react.useState)("brief");
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setUnlocked(isVaultUnlocked());
	}, []);
	function printDoc() {
		window.print();
	}
	const brief = doc === "brief";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("min-h-dvh", brief ? "bg-paper text-ink" : "bg-codex text-codex-fg"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: cn("no-print sticky top-0 z-20 border-b backdrop-blur-md", brief ? "border-line bg-paper/90" : "border-codex-line bg-codex/90"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mr-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg leading-none tracking-tight",
								children: "Cadence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-0.5 font-sans text-[10px] uppercase tracking-[0.16em]", brief ? "text-faint" : "text-codex-muted"),
								children: "Curriculum intelligence"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex rounded-md border p-0.5", brief ? "border-line bg-paper-3" : "border-codex-line bg-codex-2"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
								active: brief,
								onClick: () => setDoc("brief"),
								ink: brief,
								children: "Brief"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
								active: !brief,
								onClick: () => setDoc("codex"),
								ink: brief,
								children: "Vault"
							})]
						}),
						brief || unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: brief ? "primary" : "paper",
							size: "sm",
							onClick: printDoc,
							children: "Save as PDF"
						}) : null,
						!brief && unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "sm",
							className: "text-codex-fg hover:bg-codex-2",
							onClick: () => {
								lockVault();
								setUnlocked(false);
							},
							children: "Lock"
						}) : null
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12",
				children: brief ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefDocument, {}) : unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodexDocument, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VaultGate, { onUnlock: () => setUnlocked(true) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: cn("no-print border-t px-4 py-6 text-center font-sans text-xs", brief ? "border-line text-faint" : "border-codex-line text-codex-muted"),
				children: brief ? "Show this tab. Print it. Leave the vault closed." : "Founder copy. Do not project, forward, or print in a school."
			})
		]
	});
}
function Tab({ active, onClick, children, ink }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-9 min-w-20 rounded-sm px-3 font-sans text-sm font-medium", active ? ink ? "bg-ink text-paper" : "bg-paper text-ink" : ink ? "text-muted" : "text-codex-muted"),
		children
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
