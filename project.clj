(defproject heritage "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2307"]
                 [om "0.7.1"]
                 [figwheel "0.1.3-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-figwheel "0.1.3-SNAPSHOT"]]

  :source-paths ["src"]

  :figwheel {
    :http-server-root "public"
    :port 3449
    :css-dirs ["styles"]}

  :cljsbuild {
    :builds [{:id "heritage"
              :source-paths ["src"]
              :compiler {
                :output-to "resources/public/heritage.js"
                :output-dir "resources/public/out"
                :optimizations :none
                :source-map true}}]})
