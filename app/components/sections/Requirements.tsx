import { CheckCircle2 } from "lucide-react";

/**
 * Requirements section showing what Cricket Predicta needs for broadcasting
 */
export function RequirementsSection() {
  return (
    <section
      id="requirements"
      className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-900/50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm mb-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                FOR BROADCASTERS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Requirements</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Requirements for Cricket Predicta's broadcast team at Abu Dhabi
              T10
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200/50 dark:border-slate-700/30">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Non-Live Daily Interviews
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Interviews of Players, Coaches and Eminent Personalities
                      of Abu Dhabi T10
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Media Access</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      For 4 Cricket Predicta Team Members like the Broadcasters
                      who will be travelling daily from Sharjah to Abu Dhabi
                      (FOP Passes + Media Car Park)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200/50 dark:border-slate-700/30">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Workstation</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      A workstation with high speed Internet Access
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Basic Amenities
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Basic Amenities for the team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="text-center">
            <div className="inline-block p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-lg font-medium text-slate-800 dark:text-white">
                Interested in collaborating with Cricket Predicta for your
                event?
              </p>
              <p className="text-slate-600 dark:text-slate-300 mt-2">
                Contact us for broadcasting requirements and media partnerships
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
