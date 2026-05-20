import type { NavItem } from "@/components/custom/channel/types";
import type { LevelItem, CurriculumLevel } from "@/components/custom/craft-catalog/CurriculumDetails";
import type { SnapshotItem } from "@/components/custom/craft-catalog/CraftSnapshot";
import type { SmeGroup } from "@/components/custom/craft-catalog/ContributingExperts";
import type { InstructorResource } from "@/components/custom/craft-catalog/InstructorResources";
import type { RelatedCraft } from "@/components/custom/craft-catalog/RelatedCrafts";

// ─── Nav ────────────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { href: "#curriculum_details",   label: "Curriculum Details" },
  { href: "#contributing_subject", label: "Contributing Subject Matter Experts" },
  { href: "#instructor_resources", label: "Instructor Resources" },
  { href: "#related_crafts",       label: "Related Crafts" },
];

// ─── Snapshot ────────────────────────────────────────────────────────────────

export const snapshotItems: SnapshotItem[] = [
  { label: "REVISED", value: "2017, 3rd Edition" },
  {
    label: "NCCERconnect",
    value: "Not Available",
    tooltip:
      "Deliver instruction using our pre-loaded content and course management tools, streamline training, and track results through the online gradebook. Students learn using the interactive eTextbook and Media Library with Active Figures that bring the material to life, anytime and anywhere they choose.",
  },
  { label: "LANGUAGES", value: "English" },
];

// ─── Curriculum ──────────────────────────────────────────────────────────────

const level1Items: LevelItem[] = [
  { code: "AOCCC-17", title: "Abnormal Operating Conditions – Control Center",                                           link: "https://store.nccer.org/aoccc-17-abnormal-operating-conditions-control-center" },
  { code: "AOCFG-17", title: "Abnormal Operating Conditions – Field and Gas",                                            link: "https://store.nccer.org/abnormal-operating-conditions-field-gas" },
  { code: "CT2_1-17", title: "Verify Test Lead Continuity",                                                              link: "https://store.nccer.org/ct2_1-17-verify-test-lead-continuity" },
  { code: "CT2_2-17", title: "Repair Damaged Test Leads",                                                                link: "https://store.nccer.org/ct2_2-17-repair-damaged-test-leads" },
  { code: "CT2_3-17", title: "Install Test Leads by Non-Exothermic Welding Methods",                                     link: "https://store.nccer.org/ct2_3-17-install-test-leads-by-non-exothermic-welding-methods" },
  { code: "CT2_4-17", title: "Install Test Leads by Exothermic Welding Methods",                                         link: "https://store.nccer.org/ct2_4-17-install-test-leads-by-exothermic-welding-methods" },
  { code: "CT3_0-17", title: "Obtain a Voltage and Current Output Reading from a Rectifier to Verify Proper Performance", link: "https://store.nccer.org/ct3_0-17-obtain-a-voltage-and-current-output-reading-from-a-rectifier-to-verify-proper-performance" },
  { code: "CT4_1-17", title: "Troubleshoot Rectifier",                                                                   link: "https://store.nccer.org/troubleshoot-rectifier-ct4_1-17" },
  { code: "CT4_2-17", title: "Repair or Replace Defective Rectifier Components",                                         link: "https://store.nccer.org/ct4_2-17-repair-or-replace-defective-rectifier-components" },
  { code: "CT4_3-17", title: "Adjustment of Rectifier",                                                                  link: "https://store.nccer.org/ct4_3-17-adjustment-of-rectifier" },
  { code: "CT5_1-17", title: "Examine for Mechanical Damage on Buried or Submerged Pipe",                                link: "https://store.nccer.org/ct5_1-17-examine-for-mechanical-damage-on-buried-or-submerged-pipe" },
  { code: "CT5_2-17", title: "Examine for External Corrosion on Buried or Submerged Pipe",                               link: "https://store.nccer.org/ct5_2-17-examine-for-external-corrosion-on-buried-or-submerged-pipe" },
  { code: "CT5_3-17", title: "Inspect the Condition of External Coating on Buried or Submerged Pipe",                    link: "https://store.nccer.org/ct5_3-17-inspect-the-condition-of-external-coating-on-buried-or-submerged-pipe" },
  { code: "CT7_1-17", title: "Visual Inspection of Atmospheric Coatings",                                                link: "https://store.nccer.org/visual-inspection-of-atmospheric-coatings-ct7_1-17" },
  { code: "CT7_2-17", title: "Prepare Surface for Atmospheric Coating Using Hand and Power Tools",                        link: "https://store.nccer.org/ct7_2-17-prepare-surface-for-coating-using-hand-and-power-tools" },
  { code: "CT7_3-17", title: "Prepare Surface for Coating by Abrasive Water Blasting",                                   link: "https://store.nccer.org/ct7_3-17-prepare-surface-for-coating-by-abrasive-water-blasting" },
  { code: "CT7_4-17", title: "Prepare Surface for Coating by Abrasive Blasting Methods Other Than Water",                link: "https://store.nccer.org/prepare-surface-for-coating-by-abrasive-blasting-methods-other-than-water-ct7_4-17" },
  { code: "CT7_5-17", title: "Apply Coating Using Hand Application Methods",                                             link: "https://store.nccer.org/apply-coating-using-hand-application-ct7_5-17" },
  { code: "CT7_6-17", title: "Apply Coating Using Spray Application",                                                    link: "https://store.nccer.org/apply-coating-using-spray-application-ct7_6-17" },
  { code: "CT7_7-17", title: "Perform Coating Inspection",                                                               link: "https://store.nccer.org/ct7_7-17-perform-coating-inspection" },
  { code: "CT12_0-17", title: "Visually Inspect Internal Pipe Surface",                                                  link: "https://store.nccer.org/visually-inspect-internal-pipe-surface-ct12_0-17" },
];

const level2Items: LevelItem[] = [
  { code: "AOCFG-17",  title: "Abnormal Operating Conditions – Field and Gas",                              link: "https://store.nccer.org/abnormal-operating-conditions-field-gas" },
  { code: "CT1_1-17",  title: "Measure Structure-to-Soil Potentials",                                       link: "https://store.nccer.org/measuring-structure-to-soil-potentials-ct1_1-17" },
  { code: "CT1_2-17",  title: "Conduct Close Interval Survey",                                              link: "https://store.nccer.org/ct1_2-17-conduct-close-interval-survey" },
  { code: "CT1_3-17",  title: "Test and Detect Interference",                                               link: "https://store.nccer.org/testing-to-detect-interference-ct1_3-17" },
  { code: "CT1_4-17",  title: "Inspect and Perform Electrical Test of Bonds",                               link: "https://store.nccer.org/ct1_4-17-inspect-and-perform-electrical-test-of-bonds" },
  { code: "CT1_5-17",  title: "Inspect and Test Electrical Isolation",                                      link: "https://store.nccer.org/inspect-and-test-electrical-isolation-ct1_5-17" },
  { code: "CT8_1-17",  title: "Measure Pit Depth with Pit Gauge",                                           link: "https://store.nccer.org/ct8_1-17-measure-pit-depth-with-pit-gauge" },
  { code: "CT8_2-17",  title: "Measure Wall Thickness with Ultrasonic Meter",                               link: "https://store.nccer.org/ct8_2-17-measure-wall-thickness-with-ultrasonic-meter" },
  { code: "CT8_3-17",  title: "Measure Corroded Area",                                                      link: "https://store.nccer.org/ct8_3-17-measure-corroded-area" },
  { code: "CT9_1-17",  title: "Install Bonds",                                                              link: "https://store.nccer.org/ct9_1-17-install-bonds" },
  { code: "CT9_2-17",  title: "Install Galvanic Anodes",                                                    link: "https://store.nccer.org/ct9_2-17-install-galvanic-anodes" },
  { code: "CT9_3-17",  title: "Install Rectifiers",                                                         link: "https://store.nccer.org/ct9_3-17-install-rectifiers" },
  { code: "CT9_4-17",  title: "Install Impressed Current Groundbeds",                                       link: "https://store.nccer.org/ct9_4-17-install-impressed-current-groundbeds" },
  { code: "CT9_5-17",  title: "Repair Shorted Casings",                                                     link: "https://store.nccer.org/ct9_5-17-repair-shorted-casings" },
  { code: "CT9_6-17",  title: "Install Electrical Insulating Device",                                       link: "https://store.nccer.org/ct9_6-17-install-electrical-insulating-device" },
  { code: "CT10_1-17", title: "Insert and Remove Coupons",                                                   link: "https://store.nccer.org/insert-and-remove-coupons-ct10_1-17" },
  { code: "CT10_2-17", title: "Monitor Probes (Online)",                                                     link: "https://store.nccer.org/monitor-probes-on-line-ct10_2-17" },
  { code: "CT11_0-17", title: "Monitoring and Controlling the Injection Rate of the Corrosion Inhibitor",    link: "https://store.nccer.org/monitoring-and-controlling-the-injection-rate-of-the-corrosion-inhibitor-ct11_0-17" },
];

export const curriculumLevels: CurriculumLevel[] = [
  {
    label: "Level 1",
    items: level1Items,
    purchaseHref: "https://www.pearson.com/en-us/subject-catalog/p/pipeline-corrosion-control-level-1/P200000006631/9780134705200",
  },
  { label: "Level 2", items: level2Items },
];

export const competencyLinks = [
  { level: "Level 1", href: "https://toolbox.nccer.org/crafts/pipeline/454-education/459-pipeline-corrosion-control-level-1-3rd-edition" },
  { level: "Level 2", href: "https://toolbox.nccer.org/crafts/pipeline/454-education/460-pipeline-corrosion-control-level-2-3rd-edition" },
];

// ─── Contributing SMEs ────────────────────────────────────────────────────────

export const smeGroups: SmeGroup[] = [
  { letter: "A", names: ["Arthur Birx, Protech EIS Corp"] },
  { letter: "B", names: ["Benjamin Johnson, Praxair Services, Inc.", "Bill Emery, Praxair Services, Inc.", "Blaine Shellhammer, EMS USA, Inc."] },
  { letter: "C", names: ["Cameron Strother, Southland Safety", "Carl Allebach, Sunoco Logistics, L.P.", "Charles Whiten, L.E. Bell Construction Company Incorporated"] },
  { letter: "D", names: ["Dan Lake, Central NDT, Inc.", "Dan Rohret, Kinder Morgan Inc.", "Dan Ruane, Midwestern Contractors", "Dave Hoffman", "David Reeder, EMS USA, Inc", "DeWayne Schapansky, ONEOK Partners Intermediate Limited Partnership (formerly ONEOK, Inc.)", "Donavon Wright, Corrpro", "Donnie Pittsinger, Flint Energy Services, Inc."] },
  { letter: "E", names: ["Erin Worthington, Marathon Pipe Line LLC"] },
  { letter: "G", names: ["Gary Affolter, Construction Craft Academy", "Gordon Carson, CP Masters, Inc."] },
  { letter: "J", names: ["James Carroll"] },
  { letter: "K", names: ["Kimberly-Joy Harris, Enbridge Pipelines, Inc."] },
  { letter: "L", names: ["Les Harrison", "Leslie Carroll, THORCO", "Lisa Hartnup, Praxair Services, Inc.", "Lynn Simpson, Enterprise Products"] },
  { letter: "M", names: ["Mark Seitz, AECOM", "Michael Nordstrom, Corrpro", "Michael Williams"] },
  { letter: "P", names: ["Paula Gates-Rippe, ONEOK Partners Intermediate Limited Partnership (formerly ONEOK, Inc.)", "Paul Fontenot II, Safety Advantage, LLC"] },
  { letter: "R", names: ["Randall Rogers, Sunoco Logistics, L.P.", "Rick Wilenzick, Jomax Construction Co., Inc.", "RJ Rogers, Sunoco Logistics, L.P."] },
  { letter: "S", names: ["Sid Harrell", "Steve Barker, L.E. Bell Construction Company Incorporated", "Steve Montoy, Enterprise Products"] },
  { letter: "T", names: ["Timothy Mills, Kinder Morgan Inc.", "Tom Magness, Enhance Co., Inc.", "Tom Pickthall, Enhance Co., Inc.", "Travis Ashby, ONEOK Partners Intermediate Limited Partnership (formerly ONEOK, Inc.)", "Trobi Hall, Sunoco Pipeline L.P."] },
  { letter: "W", names: ["Wallace McCracken, Mears Group, Inc.", "Will Wright, Plains All American Pipeline", "William (Billy) Rado, Corrpro"] },
];

// ─── Instructor Resources ─────────────────────────────────────────────────────

export const instructorResources: InstructorResource[] = [
  {
    title: "Instructor Toolbox",
    description:
      "NCCER's Instructor Toolbox provides easy access to important instructional resources for your training program. You'll find downloadable course planning tools, examples of classroom activities and projects, and instructor tips and best practices to help you enhance your program.",
    linkHref: "https://toolbox.nccer.org",
    linkLabel: "Instructor Toolbox",
  },
];

// ─── Related Crafts ───────────────────────────────────────────────────────────

export const relatedCrafts: RelatedCraft[] = [
  { label: "Pipeline Electrical & Instrumentation",  href: "/craft-catalog/pipeline-electrical-instrumentation/" },
  { label: "Pipeline Maintenance and Mechanical",    href: "/craft-catalog/pipeline-maintenance-and-mechanical/" },
];
