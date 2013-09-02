task :test => ['karma:test', 'rspec:test']

namespace :karma do
  task :test do
    system "grunt test"
  end

  task :autotest do
    system "grunt autotest"
  end

  task :coverage do
    system "grunt test:coverage"
  end
end

namespace :rspec do
  task :test do
    system "bundle exec rspec ."
  end

  task :autotest do
    system "guard"
  end
end
