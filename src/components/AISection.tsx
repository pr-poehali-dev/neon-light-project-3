import { motion } from "framer-motion"
import { ChevronRight, Check, Paperclip, Globe, Lightbulb } from "lucide-react"

const agents = [
  { name: "Снизить CPL на 23%", isAgent: true, selected: true, icon: "◇" },
  { name: "Отключить неэффективные фразы", isAgent: true, selected: false, icon: "◉" },
  { name: "Повысить CTR объявлений", isAgent: true, selected: false, icon: "◈" },
  { name: "Иван Петров", isAgent: false, selected: false, icon: "○" },
  { name: "Перераспределить бюджет", isAgent: true, selected: false, icon: "◎" },
  { name: "Мария Соколова", isAgent: false, selected: false, icon: "○" },
]

export function AISection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-zinc-400 text-sm">ИИ-анализ</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Советы на основе ваших данных
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">Директолог анализирует, вы принимаете решения.</span> Бот изучает
            данные Метрики и Директа и сам формулирует, что нужно исправить прямо сейчас.
          </motion.p>

          {/* Learn more button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors text-sm flex items-center gap-2 mb-16"
          >
            Подробнее
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          {/* Agent dropdown mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                {/* Glass overlay effect */}
                <div
                  style={{
                    border: "1px solid rgba(66, 66, 66, 0.5)",
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 40%, rgba(8, 9, 10, 0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(255, 255, 255, 0.04), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #09090B 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                {/* Input field */}
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
                  <span className="text-zinc-500 italic">Назначить...</span>
                </div>

                {/* Dropdown options */}
                <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {agents.map((agent, index) => (
                    <div
                      key={agent.name}
                      style={
                        agent.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                              borderRadius: "6px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(255, 255, 255, 0.14), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1), 0 54px 73px 3px rgba(0, 0, 0, 0.5)",
                              zIndex: 20,
                              marginLeft: "-12px",
                              marginRight: "-12px",
                            }
                          : {
                              opacity: 1 - index * 0.15,
                              height: "42px",
                            }
                      }
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{
                          paddingLeft: "24px",
                          paddingRight: "24px",
                          gap: "12px",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-zinc-400 text-lg">{agent.icon}</span>
                          <span className={agent.selected ? "text-white font-medium" : "text-zinc-300"}>
                            {agent.name}
                          </span>
                          {agent.isAgent && (
                            <span className="text-xs bg-zinc-700 text-zinc-400 px-2 py-0.5 rounded">Агент</span>
                          )}
                        </div>
                        {agent.selected && <Check className="w-4 h-4 text-zinc-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom divider with two columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left column */}
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Умные рекомендации</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Бот сам определяет слабые места и предлагает конкретные шаги по улучшению.
                </p>

                {/* Triage Intelligence Card */}
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <svg className="w-4 h-4 text-zinc-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" />
                    </svg>
                    <span className="text-zinc-500 text-sm">
                      Умный <span className="text-zinc-300">анализ</span>
                    </span>
                  </div>

                  {/* Suggestions Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Проблема</span>
                    <div className="flex items-center gap-2">
                      <span
                        className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm"
                        style={{ background: "#7170ff" }}
                      >
                        <span className="w-4 h-4 bg-white/30 rounded-full" />
                        <span className="text-white">CPL вырос</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-zinc-800/30 rounded-md px-2 py-1 text-sm text-zinc-600">
                        <span className="w-3 h-3 border border-zinc-700 rounded" />
                        Поиск — Москва
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-zinc-700">
                        <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                        +34%
                      </span>
                    </div>
                  </div>

                  {/* Cause Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Причина</span>
                    <span className="text-zinc-500 text-sm">Показы по нецелевым фразам</span>
                  </div>

                  {/* Action Row */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-zinc-600 text-sm w-20">Действие</span>
                    <span className="text-zinc-500 text-sm">Добавить минус-слова</span>
                  </div>

                  {/* Expanded Suggestion Card */}
                  <div className="bg-zinc-800/40 rounded-lg p-4 ml-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-5 h-5 bg-blue-600/60 rounded-full" />
                      <span className="text-zinc-300 text-sm font-medium">Директолог</span>
                    </div>

                    <p className="text-zinc-500 text-xs mb-2">Почему это важно</p>
                    <p className="text-zinc-500 text-sm mb-4">
                      За последние 7 дней 38% бюджета ушло на фразы с нулевой конверсией
                    </p>

                    <p className="text-zinc-500 text-xs mb-2">Приоритет</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex items-center gap-1.5 bg-red-900/30 border border-red-800/40 rounded-md px-2 py-1 text-sm">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-red-400">Высокий</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-zinc-700/50 rounded-md px-2 py-1 text-sm">
                        <span className="text-zinc-400">Экономия ~12 000 ₽/мес</span>
                      </span>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-300 text-sm py-2.5 rounded-md transition-colors">
                      <Check className="w-4 h-4" />
                      Применить
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Спросите бота напрямую</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Задайте вопрос о своей рекламе — Директолог ответит с цифрами из вашего кабинета.
                </p>

                {/* Chat Input */}
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5 font-mono text-sm">
                  <p className="text-zinc-700 mb-3">// Чат с ботом в Telegram</p>
                  <div className="space-y-3 mb-6">
                    <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                      <span className="text-zinc-400 text-xs">Вы</span>
                      <p className="text-zinc-300 text-sm mt-1">Почему вырос CPL за последнюю неделю?</p>
                    </div>
                    <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg px-3 py-2">
                      <span className="text-blue-400 text-xs">Директолог</span>
                      <p className="text-zinc-300 text-sm mt-1">CPL вырос на 34% из-за падения CTR в кампании «Поиск — Москва». Рекомендую...</p>
                    </div>
                  </div>

                  {/* Ask Anything Input */}
                  <div className="bg-zinc-800/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-0.5 h-5 bg-zinc-600" />
                      <span className="text-zinc-600">Спросите о своей рекламе...</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Paperclip className="w-3.5 h-3.5" />
                        Отчёт
                      </button>
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Globe className="w-3.5 h-3.5" />
                        Метрика
                      </button>
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Lightbulb className="w-3.5 h-3.5" />
                        Директ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}