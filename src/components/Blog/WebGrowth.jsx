import React from 'react'

import heroGrowth from '../../assets/images/the-design-the-concept-hero-page.png';
// import fourPillars from '../../assets/images/webgrowth-pillars.png';
import clusterMap from '../../assets/images/pillar-linking-to-others.png';
// import technicalSeo from '../../assets/images/technical-seo.png';
// import backlinksImg from '../../assets/images/backlinks.png';
// import auditImg from '../../assets/images/audit.png';
// import strategyRoadmap from '../../assets/images/roadmap.png';
// import seoMetrics from '../../assets/images/webgrowth-seo-table.png';

function WebGrowth() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero-webgrowth-blog w-[100vw] h-[150vh] !mt-10 ">
        <div className="webgrowth-description-pills flex justify-center items-center gap-2 h-[7%] lg:!flex lg:!justify-center lg:!items-center lg:!gap-2 lg:!pr-50 lg:!h-[5%]">
          <div className="pill1 w-[25%] border-[1px] rounded-4xl !py-1 text-[0.6rem] flex justify-center items-center lg:!w-[13%] lg:!text-sm">web growth</div>
          <div className="pill2 w-[25%] border-[1px] rounded-4xl !py-1 text-[0.6rem] flex justify-center items-center lg:!w-[13%] lg:!text-sm">SEO strategy</div>
          <div className="pill3 w-[25%] border-[1px] rounded-4xl !py-1 text-[0.6rem] flex justify-center items-center lg:!w-[13%] lg:!text-sm">compounding traffic</div>
        </div>

        <div className="hero-main h-[100%] flex justify-center items-center lg:!w-[100%] lg:!h-[100%]">
          <div className="hero-inner w-[95%] h-[100%] !pl-2 !pt-2 lg:!w-[50%] lg:!pl-5 lg:!pt-5">
            <div className="hero-header w-[95%] font-bold text-[1.6rem] lg:!text-[2.5rem]">
              <h1>What Is Web Growth? The 2025 Blueprint for Website Success</h1>
            </div>
            <div className="hero-numeric w-[95%] h-[20%] !mt-4 lg:!w-[95%] lg:!h-[30%] lg:!mt-3">
              <div className="hero-numeric-topbox w-[100%] h-[50%] flex gap-20 lg:!gap-50 items-start !pt-2">
                <div className="topleft">
                  <label className="text-[1.2rem] font-bold lg:!text-[2rem]">Date</label>
                  <p className="text-[1rem] lg:!text-[1.1rem]">05-09-25</p>
                </div>
                <div className="topright">
                  <label className="text-[1.2rem] font-bold lg:!text-[2rem]">author</label>
                  <p className="text-[1rem] lg:!text-[1.1rem]">mohammed dhinoj</p>
                </div>
              </div>
              <div className="hero-numeric-bottombox w-[100%] h-[50%] flex gap-20 lg:!gap-50 items-start !pt-2">
                <div className="topleft">
                  <label className="text-[1.2rem] font-bold lg:!text-[2rem]">time</label>
                  <p className="text-[1rem] lg:!text-[1.1rem]">7-min</p>
                </div>
                <div className="topright">
                  <label className="text-[1.2rem] font-bold lg:!text-[2rem]">share this post</label>
                  <p className="text-[1rem] lg:!text-[1.1rem]">linkedin</p>
                  <p className="text-[1rem] lg:!text-[1.1rem]">X</p>
                </div>
              </div>
            </div>
            <div className="hero-photo w-[97.5%] h-[40%] rounded-3xl overflow-hidden lg:!w-[99%] lg:!h-[40%]">
              <img className='w-[100%] h-[100%]' src={heroGrowth} alt="Web growth concept illustration" />
            </div>
            <div className="hero-description">
              <p className="!my-10 !mx-5">
                Web growth in 2025 means building compounding organic traffic, authority, and results—not chasing hacks, but connecting topics, user value, and SEO deeply. Learn the playbook behind long-lasting growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOUR PILLARS OF WEB GROWTH */}
      <div className="webgrowth-pillars-blog justify-center !mt-50 hidden md:!flex lg:!flex ">
        <div className="webgrowth-pillars-blog-inner-main w-[95%] h-[300vh] !pl-2 !pt-2 lg:!w-[55vw] lg:!h-[120vh]">
          <div className="webgrowth-pillars-header w-[95%] font-bold lg:!text-[2.5rem]">
            <h1>The Four Pillars of Web Growth</h1>
          </div>
          <div className="webgrowth-pillars-card-main w-[95%] h-[100%] gap-10 !mt-10 lg:!flex lg:!gap-5 lg:!mt-5">
            <div className="webgrowth-pillars-photo w-[100%] h-[65%] rounded-2xl overflow-hidden lg:!w-[48%] lg:!h-[55%]">
              <img src="" alt="The Four Pillars of Web Growth" />
            </div>
            <div className="webgrowth-pillars-list w-[100%] lg:!w-[48%] lg:!flex lg:!flex-col lg:!gap-4">
              <div className="pillar-title font-bold text-[1.25rem] lg:!text-[2rem]">Topical Authority</div>
              <div className="pillar-desc !mb-4">
                <p>Create pillar pages & clusters around user intent, mapping all angles of a topic, with internal links and timely updates for long-term rankings.</p>
              </div>
              <div className="pillar-title font-bold text-[1.25rem] lg:!text-[2rem]">Technical SEO & UX Health</div>
              <div className="pillar-desc !mb-4">
                <p>Track site health, Core Web Vitals, mobile usability, schema markup. Error-free, fast, accessible technical ground is your compounding asset.</p>
              </div>
              <div className="pillar-title font-bold text-[1.25rem] lg:!text-[2rem]">Content Relevance & E-E-A-T</div>
              <div className="pillar-desc !mb-4">
                <p>Write with first-hand experience, expertise, and transparent citations. Show credentials, keep content fresh, and build clear author/about pages for trust.</p>
              </div>
              <div className="pillar-title font-bold text-[1.25rem] lg:!text-[2rem]">Strategic Link Building</div>
              <div className="pillar-desc">
                <p>Earn relevant backlinks through guides, original resources, and outreach—not spam. Interlink clusters and secure mentions in reputable web communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CLUSTER STRATEGY/CONTENT MAP */}
      <div className="webgrowth-cluster-main w-[100vw] h-[200vh] flex justify-center lg:!h-[100vh]">
        <div className="webgrowth-cluster-inner w-[95%] h-[100%] !px-5 !pt-6 lg:!w-[50%] lg:!h-[100%]">
          <div className="cluster-header font-bold text-[1.5rem] lg:!text-[2.5rem]">
            <h1>Pillar & Cluster Content: Your Authority Blueprint</h1>
          </div>
          <div className="cluster-photo w-[97.5%] h-[45%] rounded-3xl overflow-hidden !mt-5 lg:!w-[99%] lg:!h-[45%] flex justify-center items-center">
            <img className="" src={clusterMap} alt="Pillar and cluster content map" />
          </div>
          <div className="hero-description cluster-desc">
            <p className="!my-10 !mx-5">
              Create one in-depth “pillar” guide, surrounded by supporting “cluster” articles that answer every user query and funnel link equity. Keep a glossary, FAQs, and update with real-world data monthly.
            </p>
          </div>
        </div>
      </div>

      {/* TECHNICAL SEO SECTION */}
      <div className="technical-seo-main w-[100vw] h-[170vh] flex justify-center lg:!h-[90vh]">
        <div className="technical-seo-inner w-[95%] h-[100%] !px-5 !pt-5 lg:!w-[50%] lg:!h-[100%]">
          <div className="technical-seo-header font-bold text-[1.5rem] lg:!text-[2.5rem]">
            <h1>Technical SEO: The Foundation of Growth</h1>
          </div>
          <div className="technical-seo-photo w-[97.5%] h-[45%] rounded-3xl overflow-hidden !mt-5 lg:!w-[99%] lg:!h-[45%]">
            <img className="" src="" alt="Technical SEO health and audits" />
          </div>
          <div className="hero-description technical-seo-desc">
            <p className="!my-10 !mx-5">
              Run regular audits for page errors, speed, mobile, and schema. Pass Core Web Vitals and maximize crawlability to keep every new post indexed and ranking fast.
            </p>
          </div>
        </div>
      </div>

      {/* LINK BUILDING & DIGITAL OUTREACH */}
      <div className="backlinking-main w-[100vw] h-[170vh] flex justify-center lg:!h-[90vh]">
        <div className="backlinking-inner w-[95%] h-[100%] !px-5 !pt-5 lg:!w-[50%] lg:!h-[100%]">
          <div className="backlinking-header font-bold text-[1.5rem] lg:!text-[2.5rem]">
            <h1>Smart Link Building: Trust and Authority</h1>
          </div>
          <div className="backlinking-photo w-[97.5%] h-[45%] rounded-3xl overflow-hidden !mt-5 lg:!w-[99%] lg:!h-[45%]">
            <img className="" src="" alt="Effective link building for web growth" />
          </div>
          <div className="hero-description backlinking-desc">
            <p className="!my-10 !mx-5">
              Modern web growth means earning backlinks from relevant, high-trust sources: guest posts, expert roundups, resource pages. Avoid spam tactics; every link should help your users, not just bots.
            </p>
          </div>
        </div>
      </div>

      {/* GROWTH ROADMAP SECTION */}
      <div className="growth-roadmap-main w-[100vw] h-[290vh] flex justify-center lg:!h-[130vh]">
        <div className="growth-roadmap-inner w-[95%] h-[100%] !px-5 !pt-5 lg:!w-[50%] lg:!h-[100%]">
          <div className="growth-roadmap-header font-bold text-[1.5rem] lg:!text-[2.5rem]">
            <h1>The 90-Day Growth Roadmap</h1>
          </div>
          <div className="growth-roadmap-photo w-[97.5%] h-[40%] rounded-3xl overflow-hidden !mt-5 lg:!w-[99%] lg:!h-[40%]">
            <img className="" src="" alt="90-day website growth roadmap" />
          </div>
          <div className="hero-description growth-roadmap-desc">
            <label htmlFor="">Month 1: Foundation</label>
            <p className="!my-5 !mx-5">
              Set up analytics, audit your current site, research the best topics for authority, and plan your first pillar + 3 cluster articles.
            </p>
            <label htmlFor="">Month 2: Content & Links</label>
            <p className="!my-5 !mx-5">
              Write your pillar, publish 2-3 cluster posts, start targeted outreach for backlinks and shares, expand your glossary.
            </p>
            <label htmlFor="">Month 3: Refresh & Expand</label>
            <p className="!my-5 !mx-5">
              Update your pillar, refresh subpages, add new FAQ and stats, do another technical audit, and expand your internal linking.
            </p>
          </div>
        </div>
      </div>

      {/* WEB GROWTH METRICS TABLE */}
      <div className="webgrowth-metrics-main w-[100vw] h-[170vh] flex justify-center lg:!h-[80vh]">
        <div className="webgrowth-metrics-inner w-[95%] h-[100%] !px-5 !pt-5 lg:!w-[50%] lg:!h-[100%]">
          <div className="webgrowth-metrics-header font-bold text-[1.5rem] lg:!text-[2.5rem]">
            <h1>What to Measure: Web Growth SEO Metrics</h1>
          </div>
          <div className="webgrowth-metrics-photo w-[97.5%] h-[40%] rounded-3xl overflow-hidden !mt-5 lg:!w-[99%] lg:!h-[40%]">
            <img className="" src="" alt="SEO metrics table for web growth" />
          </div>
          <div className="hero-description webgrowth-metrics-desc">
            <p className="!my-5 !mx-5">
              Don’t just track traffic and rankings. Look at indexed pages, average time on page, conversion rate, backlinks earned, and how often your key pages are updated.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="FAQ-main w-[100vw] h-[220vh] flex justify-center lg:!h-[120vh]">
        <div className="FAQ-inner w-[95%] h-[100%] !px-5 !pt-5 lg:!w-[50%] lg:!h-[100%]">
          <div className="FAQ-header w-[95%] font-bold text-[1.7rem] lg:!text-[2.5rem]">
            <h1>Frequently Asked Questions (FAQ)</h1>
          </div>
          <div className="hero-description FAQ-questions !mt-10">
            <label className='font-bold'>How is web growth different from classic SEO?</label>
            <p className='!my-5 !mx-5'>Web growth is holistic: it combines topical depth, compounding internal links, technical health, and user experience for sustained results—not just keywords or backlinks.</p>
          </div>
          <div className="hero-description FAQ-questions !mt-10">
            <label className='font-bold'>How often should I update my content?</label>
            <p className='!my-5 !mx-5'>Update pillar and cluster pages every 1-3 months with new insights, stats, or FAQs. SEO rewards freshness and accuracy in 2025.</p>
          </div>
          <div className="hero-description FAQ-questions !mt-10">
            <label className='font-bold'>How do I earn modern, effective backlinks?</label>
            <p className='!my-5 !mx-5'>Create reference guides, collaborate with peers, and share unique data or visuals in your niche. Focus on quality over quantity—avoid outdated link schemes.</p>
          </div>
          <div className="hero-description FAQ-questions !mt-10">
            <label className='font-bold'>Do I need expensive tools?</label>
            <p className='!my-5 !mx-5'>Free tools (GSC, PageSpeed, Screaming Frog Lite), plus free trials of premium SEO tools (Ahrefs, SEMrush), are more than enough to get started and sustain most sites.</p>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default WebGrowth
