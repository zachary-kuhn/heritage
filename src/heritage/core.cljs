(ns heritage.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def questions
  (atom {:answers []
         :questions [{:body "Tabs or Spaces?"
                      :answers {:tabs "Tabs"
                                :spaces "Spaces"}}
                     {:body "Single quote or Double quote?"
                      :answers {:single "Single"
                                :double "Double"}}
                     {:body "Plural or Singular"
                      :answers {:plural "Plural"
                                :singular "Singular"}}
                     {:body "Indentation Level: 2 spaces or 4 spaces"
                      :answers {2 "2 Spaces"
                                4 "4 Spaces"}}
                     {:body "Continuation Indent Level: 0.5x, 1.0x or 2.0x"
                      :answers {0.5 "0.5x"
                                1.0 "1.0x"
                                2.0 "2.0x"}}
                     {:body "Function opening brace placement"
                      :answers {:newline "Next Line"
                                :lineend "Line End"}}
                     {:body "Period separator placement"
                      :answers {:newline "Next Line"
                                :lineend "Line End"}}
                     {:body "Else placement"
                      :answers {:newline "Next Line"
                                :currentline "With '{'"}}
                     {:body "New block braces"
                      :answers {:always "Always"
                                :necessary "When necessary"}}
                     {:body "Variable naming"
                      :answers {:camel "Camel Case"
                                :snake "Snake Case"}}
                     {:body "File naming"
                      :answers {:camel "Camel Case"
                                :snake "Snake Case"
                                :spinal "Spinal Case"
                                :pascal "Pascal Case"}}
                     {:body "Var statements"
                      :answers {:one "One"
                                :multiple "Multiple"}}
                     {:body "Leading Commas?"
                      :answers {:yes "Yes"
                                :no "No"}}
                     {:body "Semicolons?"
                      :answers {:yes "Yes"
                                :no "No"}}]}))

(defn question-el [question owner]
  (reify
    om/IRender
    (render [this]
            (dom/li nil (:body question)))))

(defn questions-el [data owner]
  (reify
    om/IRender
    (render [this]
            (apply dom/ul nil
                   (om/build-all question-el (:questions data))))))

(defn answer-el [answer owner]
  (reify
    om/IRender
    (render [this]
            (dom/li nil answer))))

(defn answers-el [data owner]
  (reify
    om/IRender
    (render [this]
            (apply dom/ul nil
                   (om/build-all answer-el (:answers data))))))

(defn add-answer [app owner e]
  (let [new-answer (.-value (om/get-node owner "new-answer"))]
    (when new-answer
      (om/transact! app :answers #(conj % new-answer)))))

(defn empty-answer-el [app owner]
  "The elements for one answer in the form."
  (reify
    om/IRender
    (render [this]
            (dom/div nil
                     (dom/input #js {:ref "new-answer" :type "text"})
                     (dom/button #js {:onClick (partial add-answer app owner)} "+")))))

(defn enter-question-el [data owner]
  "The elements for entering a question and the available answers."
  (reify
    om/IRender
    (render [this]
            (dom/div nil
                     (dom/label #js {:htmlFor "title"} "Title")
                     (dom/input #js {:type "text" :name "title"})
                     (dom/label #js {:htmlFor "description"} "Description")
                     (dom/textarea #js {:name "description"})
                     (om/build empty-answer-el data)
                     (om/build answers-el data)))))

(om/root enter-question-el questions
         {:target (. js/document (getElementById "heritage"))})
