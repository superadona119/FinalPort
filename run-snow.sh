#!/bin/bash

new_dir="./web3modal/"

# Get today's date
currentDate=$(date +"%Y-%m-%d")

# Get the date of one year ago
startDate=$(date -d "$currentDate - 9 month - 15 day" +"%Y-%m-%d")

# Iterate from startDate to endDate
endDate=$(date -d "$currentDate - 3 month -19 day" +"%Y-%m-%d")

T="T"

cd $new_dir
generate_random_time() {
    hour=$((RANDOM % 12))
    minute=$((RANDOM % 60))
    sec=$((RANDOM % 60))
    printf "%02d:%02d:%02d\n" "$hour" "$minute" "$sec"
}

while [ "$startDate" != "$endDate" ]
do
  # Get the day of the week, 1 (for Monday) through 7 (for Sunday)
  dayOfWeek=$(date -d "$startDate" +%u)

  # Output the date if it's a weekday
  if [ "$dayOfWeek" -ge 1 ] && [ "$dayOfWeek" -le 5 ]; then    
    num_times=$((RANDOM % 4))
    echo "$startDate:$num_times"
    for ((i=0; i<num_times; i++)); do
        random_time=$(generate_random_time)
        curTime="$startDate$T$random_time"
        
        echo $curTime > foo.txt;
        git commit --quiet --date "${curTime}" -am "update commit" 
    done
  fi
  
  # Increment the date
  startDate=$(date -d "$startDate + 1 day" +"%Y-%m-%d")
done
