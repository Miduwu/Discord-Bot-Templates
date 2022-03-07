module.exports = {
    name: 'calendar',
    code: `
    **:calendar: Calendar:**
    \`\`\`$getProperty[data.calendar]\`\`\`
    $requestAPI[json;calendar;{};Something went wrong]
    `
}
